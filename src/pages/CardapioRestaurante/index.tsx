import { useParams } from 'react-router-dom'
import MenuList from '../../components/MenuList'
import RestaurantHeader from '../../components/RestaurantHeader'
import { useGetRestaurantDetailsQuery } from '../../services/api'

const CardapioRestaurante = () => {
  const { id } = useParams()
  const { data: restaurante, isLoading } = useGetRestaurantDetailsQuery(id!)

  if (!restaurante || isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <RestaurantHeader />
      <div className="container">
        <MenuList menu={restaurante.cardapio} />
      </div>
    </>
  )
}

export default CardapioRestaurante
