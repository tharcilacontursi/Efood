import { useEffect, useState } from 'react'

import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'

export type Prato = {
  id: number
  porcao: string
  foto: string
  preco: number
  nome: string
  descricao: string
}

export type Restaurante = {
  nome: string
  foto: string
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <>
        <Header />
        <div className="container">
          <RestaurantsList restaurantes={restaurantes} />
        </div>
      </>
    </>
  )
}

export default Home
