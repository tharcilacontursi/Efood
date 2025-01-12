import { Route, Routes } from 'react-router-dom'
import CardapioRestaurante from '../pages/CardapioRestaurante'
import Carrinho from '../pages/Carrinho'
import Home from '../pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<CardapioRestaurante />} />
    <Route path="/carrinho" element={<Carrinho />} />
  </Routes>
)

export default Rotas
