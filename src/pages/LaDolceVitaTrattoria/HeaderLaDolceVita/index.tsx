import fundo from '../../../assets/images/fundo.png';
import logo from '../../../assets/images/logo.png';
import tratoria from '../../../assets/images/tratoria.png';
import { Container, Logo, LogoContainer, TrattoriaContainer,  } from './style';

const HeaderLaDolceVita = () => (
    <Container>
        <LogoContainer style={{ backgroundImage: `url(${fundo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
            <Logo>
                <h4> Restaurantes </h4>
                <img src={logo} alt='logo' />
                <h4> 0 produto(s) no carrinho </h4>
            </Logo>
        </div>
        </LogoContainer>
        <TrattoriaContainer style={{ backgroundImage: `url(${tratoria})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="trattoiacontainer">
            <h2>Italiana</h2>
            <h1>La Dolce Vita Trattoria</h1>
            </div>
        </TrattoriaContainer>
    </Container>
);

export default HeaderLaDolceVita;
