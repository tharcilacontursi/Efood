import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'
import { useGetRestaurantsListQuery } from '../../services/api'

export type Restaurante = {
  nome: string
  foto: string
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantsListQuery()

  if (restaurantes) {
    return (
      <>
        <>
          <Header />
          <div className="container">
            <RestaurantsList restaurantes={restaurantes} />
          </div>
        </>
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
