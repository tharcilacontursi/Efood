import { Route, Routes } from 'react-router-dom'
import CardapioRestaurante from '../pages/CardapioRestaurante'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import Payment from '../pages/Payment'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<CardapioRestaurante />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/payment" element={<Payment />} />
  </Routes>
)

export default Rotas
