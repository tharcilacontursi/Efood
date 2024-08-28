import {
  Descricao,
  MenuButton,
  MenuCard,
  MenuImage,
  MenuTitulo,
} from './styles'

type Props = {
  image: string
  description: string
  title: string
  onClick?: () => void
}

const Menu = ({ image, description, title, onClick }: Props) => {
  return (
    <MenuCard onClick={onClick}>
      <MenuImage src={image} alt={title} />
      <div>
        <MenuTitulo>{title}</MenuTitulo>
      </div>
      <Descricao>{description}</Descricao>
      <MenuButton to="#">Adicionar ao carrinho</MenuButton>
    </MenuCard>
  )
}

export default Menu
