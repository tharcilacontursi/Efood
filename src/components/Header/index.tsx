import React from 'react'
import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { ImagemHeader, Logo, Titulo } from './styles'

const Header = () => (
  <ImagemHeader style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <Logo src={logo} alt="logo" />
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </ImagemHeader>
)

export default Header
