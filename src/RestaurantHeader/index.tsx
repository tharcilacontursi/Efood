import fundo from '../assets/images/fundo.png'
import { useGetFeaturedRestaurantQuery } from '../services/api'
import { Container, Logo, LogoContainer, TrattoriaContainer } from './style'

function RestaurantHeader() {
  const { data: restaurante, isLoading } = useGetFeaturedRestaurantQuery()

  if (!restaurante) {
    return <p>Carregando...</p>
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
            <h4> Restaurantes </h4>
            <img src={restaurante.foto} alt={restaurante.nome} />
            <h4> 0 produto(s) no carrinho </h4>
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
