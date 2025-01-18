import { useFormik } from 'formik'
import { useState } from 'react'
import MaskedInput from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { formataPreco } from '../../components/Cart'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { clearCart } from '../../store/reducers/cart'
import {
  CartButton,
  CartContainer,
  InputGroup,
  Overlay,
  Sidebar,
} from './styles'

interface PaymentProps {
  deliveryData: any
  onOrderComplete: () => void
  onBackToCheckout: () => void
}

const Payment: React.FC<PaymentProps> = ({
  deliveryData,
  onOrderComplete,
  onBackToCheckout,
}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isFinished, setIsFinished] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const { items } = useSelector((state: RootReducer) => state.cart)

  const [purchase, { data, isLoading, isError, error }] = usePurchaseMutation()

  const getTotalPrice = (items: { preco: number }[]) => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual.preco
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      nomeNoCartao: '',
      numeroDoCartao: '',
      cvv: '',
      mesDeVencimento: '',
      anoDeVencimento: '',
    },
    validationSchema: Yup.object({
      nomeNoCartao: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      numeroDoCartao: Yup.string()
        .min(16, 'O campo precisa ter pelo menos 16 caracteres')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'O campo precisa ter 3 caracteres')
        .max(3)
        .required('O campo é obrigatório'),
      mesDeVencimento: Yup.string()
        .min(1)
        .max(2)
        .required('Digite o mês de vencimento. Ex: 01'),
      anoDeVencimento: Yup.string()
        .min(4, 'O campo precisa ter 4 caracteres')
        .max(4)
        .required('O campo é obrigatório'),
    }),
    onSubmit: async (values) => {
      if (!deliveryData) {
        alert('Dados de entrega não fornecidos')
        navigate('/')
        return
      }

      const payload = {
        delivery: deliveryData,
        products: items.map((item) => ({ id: item.id, price: item.preco })),
        payment: {
          card: {
            name: values.nomeNoCartao,
            number: values.numeroDoCartao,
            code: parseInt(values.cvv, 10),
            expires: {
              month: parseInt(values.mesDeVencimento, 10),
              year: parseInt(values.anoDeVencimento, 10),
            },
          },
        },
      }

      try {
        console.log('Iniciando compra com payload:', payload)
        const response = await purchase(payload).unwrap()
        console.log('Resposta do pedido:', response)
        if (response?.orderId) {
          setIsFinished(true)
        } else {
          throw new Error('Erro ao processar o pagamento. Tente novamente.')
        }
      } catch (error: any) {
        console.error('Erro ao finalizar o pedido:', error)
        setErrorMessage('Erro ao finalizar o pedido. Tente novamente.')
      }
    },
  })

  const handleFinishOrder = () => {
    dispatch(clearCart())

    setTimeout(() => {
      navigate('/')
    }, 500)
  }

  if (isFinished) {
    return (
      <CartContainer>
        <Sidebar>
          <h2>Pedido realizado - Order ID: {data?.orderId}</h2>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <br />
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <br />
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <br />
          <p>
            Esperamos que desfrute de uma deliciosa experiência gastronômica.
            Bom apetite!
          </p>
          <br />
          <CartButton onClick={handleFinishOrder} style={{ marginTop: '24px' }}>
            Concluir
          </CartButton>
        </Sidebar>
      </CartContainer>
    )
  }

  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <h2>Pagamento - Valor a pagar: {formataPreco(getTotalPrice(items))}</h2>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form onSubmit={form.handleSubmit}>
          <InputGroup>
            <label htmlFor="nomeNoCartao">Nome no cartão</label>
            <input
              type="text"
              name="nomeNoCartao"
              id="nomeNoCartao"
              required
              value={form.values.nomeNoCartao}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {form.touched.nomeNoCartao && form.errors.nomeNoCartao}
            </small>
          </InputGroup>
          <div className="numeroCartao-CVV">
            <InputGroup maxWidth="228px">
              <label htmlFor="numeroDoCartao">Número do cartão</label>
              <MaskedInput
                mask="9999 9999 9999 9999"
                type="text"
                name="numeroDoCartao"
                id="numeroDoCartao"
                required
                value={form.values.numeroDoCartao}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {form.touched.numeroDoCartao && form.errors.numeroDoCartao}
              </small>
            </InputGroup>
            <InputGroup maxWidth="87px">
              <label htmlFor="cvv">CVV</label>
              <MaskedInput
                mask="999"
                type="text"
                name="cvv"
                id="cvv"
                required
                value={form.values.cvv}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{form.touched.cvv && form.errors.cvv}</small>
            </InputGroup>
          </div>
          <div className="mesAnoVencimento">
            <InputGroup maxWidth="155px">
              <label htmlFor="mesDeVencimento">Mês de vencimento</label>
              <MaskedInput
                mask="99"
                type="text"
                name="mesDeVencimento"
                id="mesDeVencimento"
                required
                value={form.values.mesDeVencimento}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {form.touched.mesDeVencimento && form.errors.mesDeVencimento}
              </small>
            </InputGroup>
            <InputGroup maxWidth="155px">
              <label htmlFor="anoDeVencimento">Ano de vencimento</label>
              <MaskedInput
                mask="9999"
                type="text"
                name="anoDeVencimento"
                id="anoDeVencimento"
                required
                value={form.values.anoDeVencimento}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {form.touched.anoDeVencimento && form.errors.anoDeVencimento}
              </small>
            </InputGroup>
          </div>
          <div className="buttons">
            <CartButton type="submit" disabled={isLoading}>
              Finalizar Pedido
            </CartButton>
            <CartButton type="button" onClick={onBackToCheckout}>
              Voltar para o Checkout
            </CartButton>
          </div>
        </form>
      </Sidebar>
    </CartContainer>
  )
}

export default Payment
