import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import CardapioRestaurante from './pages/CardapioRestaurante'
import Home from './pages/Home'
import { store } from './store/index'
import { GlobalCss } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/restaurantes/:id',
    element: (
      <>
        <CardapioRestaurante />
      </>
    ),
  },
])

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Footer />
    </Provider>
  )
}

export default App
