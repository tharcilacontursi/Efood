import { Restaurante } from '../../pages/Home'
import Restaurant from '../Restaurante'

import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const RestaurantList = ({ restaurantes }: Props) => {
  const getRestauranteTags = (restaurante: Restaurante): string[] => {
    const tags: string[] = []

    if (restaurante.tipo && restaurante.tipo.length > 0) {
      tags.push(restaurante.tipo)
    }

    if (restaurante.destacado) {
      tags.push('Destaque da semana')
    }

    return tags
  }
  return (
    <>
      <Container>
        <div className="container">
          <List>
            {restaurantes.map((restaurante) => (
              <Restaurant
                key={restaurante.id}
                nota={restaurante.avaliacao}
                image={restaurante.capa}
                description={restaurante.descricao}
                title={restaurante.titulo}
                infos={getRestauranteTags(restaurante)}
                id={restaurante.id}
              />
            ))}
          </List>
        </div>
      </Container>
    </>
  )
}

export default RestaurantList
