import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { useGetRestaurantDetailsQuery } from '../../services/api'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import {
  Button,
  Container,
  Linkk,
  Logo,
  LogoContainer,
  TrattoriaContainer,
} from './style'
function RestaurantHeader() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const { id } = useParams<{ id: string }>()
  const { data: restaurante, isLoading } = useGetRestaurantDetailsQuery(
    id || ''
  )

  if (!restaurante) {
    return <p>Erro ao carregar os dados do restaurante.</p>
  }

  return (
    <Container>
      <LogoContainer
        style={{
          backgroundImage: `url(${fundo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <Logo>
            <Linkk to="/">Restaurantes</Linkk>
            <img src={logo} alt="logo Efood" />
            <Button onClick={openCart}>
              {items.length} - produto(s) no carrinho
            </Button>
          </Logo>
        </div>
      </LogoContainer>

      <TrattoriaContainer
        style={{
          backgroundImage: `url(${restaurante.capa})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <h2>{restaurante.tipo}</h2>
          <h1>{restaurante.titulo}</h1>
        </div>
      </TrattoriaContainer>
    </Container>
  )
}

export default RestaurantHeader
