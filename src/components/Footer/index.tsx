import  logo  from "../../assets/images/logo.png";
import  instagram  from "../../assets/images/instagram.png";
import  twitter  from "../../assets/images/twitter.png";
import  facebook  from "../../assets/images/facebook.png";
import { FooterContainer, Logo, Paragrafo, SocialmidiaContainer } from "./styles";


const Footer = () => (
 <FooterContainer>
    <Logo src={logo}alt="logo efood" />
    <SocialmidiaContainer>
        <img src={instagram} alt="instagram logo" />
        <img src={facebook} alt="facebook logo" />
        <img src={twitter} alt="instagram logo" />
    </SocialmidiaContainer>
    <Paragrafo>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, 
        qualidade dos produtos é toda do estabelecimento contratado.
    </Paragrafo>
 </FooterContainer>   
)

export default Footer