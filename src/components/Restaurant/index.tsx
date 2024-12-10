import { Link } from 'react-router-dom'
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

function Restaurant({ image, description, title, infos, nota, id }: Props) {
  return (
    <Link
      to={`/restaurantes/${id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Card>
        <ImagemRestaurante src={image} alt={title} />
        <Infos>
          {infos.map((info) => (
            <Tag key={id}>{info}</Tag>
          ))}
        </Infos>
        <div>
          <Titulo>{title}</Titulo>
          <NotaAvaliada>{nota}</NotaAvaliada>
        </div>
        <Descricao>{description}</Descricao>
        <ButtonLink to={`/restaurantes/${id}`}>Saiba mais</ButtonLink>
      </Card>
    </Link>
  )
}

export default Restaurant
