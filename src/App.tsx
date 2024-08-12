import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import Footer from './components/Footer'
import Home from './pages/Home'
import HeaderLaDolceVita from './pages/HeaderRestaurante'
import RestauranteDetalhe from './pages/DetalhesRestaurante'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/restaurante/:id',
    element: (
      <>
        <RestauranteDetalhe />
      </>
    ),
  },
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
