import fundo from '../../../assets/images/fundo.png'
import logo from '../../../assets/images/logo.png'
import tratoria from '../../../assets/images/tratoria.png'
import { Container, ImagemFundo, Logo, LogoContainer, TrattoriaContainer } from './style';


const HeaderLaDolceVita = () => (
    <Container>
        <LogoContainer>
            <ImagemFundo style={{ backgroundImage: `url(${fundo})`}} />
            <Logo>
                <h4> Restaurantes </h4>
                <img src={logo} alt='logo' />
                <h4> 0 produto(s) no carrinho </h4>
            </Logo>
        </LogoContainer>
        <TrattoriaContainer>
            <img style={{ backgroundImage: `url(${tratoria})`}} />
            <h2>Italiana</h2>
            <h1>La Dolce Vita Trattoria</h1>
        </TrattoriaContainer>
    </Container>
    
);

export default HeaderLaDolceVita;