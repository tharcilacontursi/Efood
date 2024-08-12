import React from 'react'
import { Card, Titulo, Descricao, Infos, ImagemRestaurante } from './styles'
import { ButtonLink } from '../Button'
import Tag from '../Tag'
import NotaAvaliada from '../Avaliacoes'

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
    <ButtonLink to={`/restaurante/${id}`}>Saiba mais</ButtonLink>
  </Card>
)

export default Restaurant
