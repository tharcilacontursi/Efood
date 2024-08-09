import estrela from '../../assets/images/estrela.png'
import { NotaContainer } from './styles'

type Props = {
  children: number
}

const NotaAvaliada = ({ children }: Props) => (
  <NotaContainer>
    {children}
    <img src={estrela} alt="estrela" />
  </NotaContainer>
)

export default NotaAvaliada
