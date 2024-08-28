import { useState } from 'react'
import { useDispatch } from 'react-redux'
import fechar from '../../assets/images/close.png'
import { add, open } from '../../store/reducers/cart'
import Menu from '../MenuItem/idex'
import { MenuButton } from '../MenuItem/styles'
import { Container } from '../RestaurantsList/styles'
import { MenuUl, Modal, ModalContent } from './styles'

export type MenuItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Props = {
  menu: MenuItem[]
}

const MenuList = ({ menu }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [itemSelecionado, setItemSelecionado] = useState<MenuItem | null>(null)

  const dispatch = useDispatch()

  const modalAberto = (item: MenuItem) => {
    setModalEstaAberto(true)
    setItemSelecionado(item)
  }

  const addToCart = () => {
    if (itemSelecionado) {
      dispatch(add(itemSelecionado))
      setModalEstaAberto(false)
      dispatch(open())
    }
  }

  return (
    <>
      <Container>
        <div className="container">
          <MenuUl>
            {menu.map((item) => (
              <Menu
                key={item.id}
                onClick={() => modalAberto(item)}
                image={item.foto}
                description={item.descricao}
                title={item.nome}
              />
            ))}
          </MenuUl>
        </div>
      </Container>
      {itemSelecionado && (
        <Modal className={modalEstaAberto ? 'visible' : ''}>
          <div
            onClick={() => setModalEstaAberto(false)}
            className="overlay"
          ></div>
          <ModalContent className="container">
            <img
              onClick={() => setModalEstaAberto(false)}
              className="close-icon"
              src={fechar}
              alt="Fechar"
            />
            <div>
              <img
                className="itemMenu-image"
                src={itemSelecionado.foto}
                alt=""
              />
            </div>
            <div className="content">
              <h4>{itemSelecionado.nome}</h4>
              <p>
                {itemSelecionado.descricao} <br />
                <br />
                Serve: {itemSelecionado.porcao}
              </p>
              <MenuButton to="#" onClick={addToCart}>
                Adicionar ao carrinho - R$ {itemSelecionado.preco.toFixed(2)}
              </MenuButton>
            </div>
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default MenuList
