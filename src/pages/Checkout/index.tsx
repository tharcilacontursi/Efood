import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import {
  CartButton,
  CartContainer,
  InputGroup,
  Overlay,
  Sidebar,
} from './styles'

const Checkout = () => {
  const navigate = useNavigate()
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      houseNumber: '',
      houseComplement: '',
      products: [],
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'A cidade precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .length(8, 'O CEP precisa ter 8 caracteres')
        .required('O campo é obrigatório'),
      houseNumber: Yup.number()
        .typeError('O número deve ser válido')
        .min(1, 'O número precisa ser maior que 0')
        .required('O campo é obrigatório'),
    }),
    onSubmit: (values) => {
      const payload = {
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.houseNumber),
            complement: values.houseComplement,
          },
        },
        products: [
          {
            id: 1,
            price: 100,
          },
        ],
        payment: {
          card: {
            name: 'Nome do titular',
            number: '1234567812345678',
            code: 123,
            expires: {
              month: 12,
              year: 2025,
            },
          },
        },
      }

      purchase(payload)
    },
  })

  const getErrorMessage = (fieldName: keyof typeof form.values) => {
    if (form.touched[fieldName] && form.errors[fieldName]) {
      return form.errors[fieldName]
    }
    return null
  }

  if (items.length === 0) {
    return <Navigate to="/" />
  }

  const handleContinueToPayment = () => {
    if (!form.isValid) return
    navigate('/payment', {
      state: { delivery: form.values },
    })
  }

  const handleBackToCart = () => {
    navigate('/')
  }

  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <h2>Entrega </h2>
        <form onSubmit={form.handleSubmit}>
          <InputGroup>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              id="fullName"
              type="text"
              required
              name="fullName"
              value={form.values.fullName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('fullName')}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              id="address"
              type="text"
              required
              name="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('address')}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              required
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('city')}</small>
          </InputGroup>
          <div className="cep-numero">
            <InputGroup maxWidth="155px">
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                type="text"
                required
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cep')}</small>
            </InputGroup>
            <InputGroup maxWidth="155px">
              <label htmlFor="houseNumber">Número</label>
              <input
                id="houseNumber"
                type="number"
                required
                name="houseNumber"
                value={form.values.houseNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('houseNumber')}</small>
            </InputGroup>
          </div>
          <InputGroup>
            <label htmlFor="houseComplement">Complemento (opcional)</label>
            <input
              id="houseComplement"
              type="text"
              name="houseComplement"
              value={form.values.houseComplement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('houseComplement')}</small>
          </InputGroup>

          <div className="buttons">
            <CartButton type="submit" onClick={handleContinueToPayment}>
              Continuar com o pagamento
            </CartButton>
            <CartButton type="button" onClick={handleBackToCart}>
              Voltar para o carrinho
            </CartButton>
          </div>
        </form>
      </Sidebar>
    </CartContainer>
  )
}

export default Checkout
