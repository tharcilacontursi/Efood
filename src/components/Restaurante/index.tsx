import NotaAvaliada from '../Avaliacoes'
import { ButtonLink } from '../Button'
import Tag from '../Tag'
import { Card, Descricao, ImagemRestaurante, Infos, Titulo } from './styles'

type Props = {
  image: string
  description: string
  title: string
  infos: string[]
  nota: number
  id: number
}

const Restaurant = ({ image, description, title, infos, nota, id }: Props) => (
  <Card>
    <ImagemRestaurante src={image} alt={title} />
    <Infos>
      {infos.map((info, index) => (
        <Tag key={index}>{info}</Tag>
      ))}
    </Infos>
    <div>
      <Titulo>{title}</Titulo>
      <NotaAvaliada>{nota}</NotaAvaliada>
    </div>
    <Descricao>{description}</Descricao>
    <ButtonLink to={`/restaurantes/${id}`}>Saiba mais</ButtonLink>
  </Card>
)

export default Restaurant
