import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Rotas from './routes'
import { store } from './store/index'
import { GlobalCss } from './styles'

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <BrowserRouter>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
