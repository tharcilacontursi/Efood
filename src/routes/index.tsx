import { Route, Routes } from 'react-router-dom'
import CardapioRestaurante from '../pages/CardapioRestaurante'
import Home from '../pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<CardapioRestaurante />} />
  </Routes>
)

export default Rotas
