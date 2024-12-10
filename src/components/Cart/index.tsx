import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import {
  CartButton,
  CartContainer,
  CartItem,
  Overlay,
  PriceContainer,
  Sidebar,
} from './styles'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco)
}

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const handleContinueToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)} </span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <PriceContainer>
          <p>Valor total </p>
          <p>{formataPreco(getTotalPrice())}</p>
        </PriceContainer>
        <CartButton onClick={handleContinueToCheckout}>
          Continuar com a entrega
        </CartButton>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
