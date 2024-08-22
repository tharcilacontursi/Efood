import { useParams } from 'react-router-dom'
import MenuList from '../../components/MenuList'
import RestaurantHeader from '../../RestaurantHeader'
import { useGetRestaurantDetailsQuery } from '../../services/api'

const CardapioRestaurante = () => {
  const { id } = useParams()
  const { data: cardapio, isLoading } = useGetRestaurantDetailsQuery(id!)

  if (!cardapio || isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <RestaurantHeader />
      <div className="container">
        <MenuList menu={cardapio} />
      </div>
    </>
  )
}

export default CardapioRestaurante
