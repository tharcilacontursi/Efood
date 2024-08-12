import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, LogoContainer, Logo, TrattoriaContainer } from './style'
import { Restaurante } from '../Home'
import fundo from '../../assets/images/fundo.png'

const HeaderResutante = () => {
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
    <Container>
      <LogoContainer
        style={{
          backgroundImage: `url(${fundo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <Logo>
            <h4> Restaurantes </h4>
            <img src={restaurante.foto} alt={restaurante.nome} />
            <h4> 0 produto(s) no carrinho </h4>
          </Logo>
        </div>
      </LogoContainer>
      <TrattoriaContainer
        style={{
          backgroundImage: `url(${restaurante.capa})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <h2>{restaurante.tipo}</h2>
          <h1>{restaurante.titulo}</h1>
        </div>
      </TrattoriaContainer>
    </Container>
  )
}

export default HeaderResutante
