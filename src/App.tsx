import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Rotas from './routes'
import { store } from './store/index'
import { GlobalCss } from './styles'

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <BrowserRouter>
        <Cart />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
