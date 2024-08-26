import { useState } from 'react'
import fechar from '../../assets/images/close.png'
import { Restaurante } from '../../pages/Home'
import Menu from '../MenuItem/idex'
import { MenuButton } from '../MenuItem/styles'
import { Container } from '../RestaurantsList/styles'
import { MenuUl, Modal, ModalContent } from './styles'

export type Props = {
  menu: Restaurante[]
}

const MenuList = ({ menu }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [modalUrl, setModalUrl] = useState('')
  const [itemSelecionado, setItemSelecionado] = useState<{
    nome: string
    descricao: string
    porcao: string
    foto: string
    preco: number
  } | null>(null)

  const modalAberto = (item: {
    nome: string
    descricao: string
    porcao: string
    foto: string
    preco: number
  }) => {
    setModalEstaAberto(true)
    setModalUrl(item.foto)
    setItemSelecionado(item)
  }

  if (!Array.isArray(menu)) {
    console.error('menu is not an array', menu)
    return <p>Erro: O cardápio não está disponível.</p>
  }
  return (
    <>
      <Container>
        <div className="container">
          <MenuUl>
            {menu.map((restaurante: Restaurante) =>
              restaurante.cardapio.map((item) => (
                <Menu
                  key={item.id}
                  onClick={() => modalAberto(item)}
                  image={item.foto}
                  description={item.descricao}
                  title={item.nome}
                />
              ))
            )}
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
