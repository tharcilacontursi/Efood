import { useState } from 'react'
import fechar from '../../assets/images/close.png'
import { Prato } from '../../pages/Home'
import Menu from '../MenuItem/idex'
import { MenuButton } from '../MenuItem/styles'
import { Container } from '../RestaurantsList/styles'
import { MenuUl, Modal, ModalContent } from './styles'

export type Props = {
  menu: Prato[]
}

const MenuList = ({ menu }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [modalUrl, setModalUrl] = useState('')
  const [itemSelecionado, setItemSelecionado] = useState<Prato | null>(null)

  const modalAberto = (item: Prato) => {
    setModalEstaAberto(true)
    setModalUrl(item.foto)
    setItemSelecionado(item)
  }

  return (
    <>
      <Container>
        <div className="container">
          <MenuUl>
            {menu.map((item: Prato) => (
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
            onClick={() => {
              setModalEstaAberto(false)
            }}
            className="overlay"
          ></div>
          <ModalContent className="container">
            <img
              onClick={() => {
                setModalEstaAberto(false)
              }}
              className="close-icon"
              src={fechar}
              alt="Fechar"
            />
            <div>
              <img className="itemMenu-image" src={modalUrl} alt="" />
            </div>
            <div className="content">
              <h4>{itemSelecionado.nome}</h4>
              <p>
                {itemSelecionado.descricao} <br />
                <br />
                Serve: {itemSelecionado.porcao}
              </p>
              <MenuButton to="#">
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
