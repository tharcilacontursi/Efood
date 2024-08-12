import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderLaDolceVita from '../HeaderRestaurante'
import MenuList from '../../components/MenuList'
import { Restaurante } from '../Home'
import HeaderResutante from '../HeaderRestaurante'

const RestauranteDetalhe = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurante(data))
  }, [id])

  if (!restaurante) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <HeaderResutante />
      <div className="container">
        <MenuList menu={restaurante.cardapio} />
      </div>
    </>
  )
}

export default RestauranteDetalhe
