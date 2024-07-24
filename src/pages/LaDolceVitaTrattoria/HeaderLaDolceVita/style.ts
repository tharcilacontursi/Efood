import styled from "styled-components";
import { cores } from "../../../styles";

export const Container = styled.section`
max-width: 1366px;
width: 100%;
height: 280px;
`
export const LogoContainer = styled.div`
height: 94px;
`

export const ImagemFundo = styled.div`
width: 100%;
height: 100%;
background-size: cover;
background-position: center;
`

export const Logo = styled.div`
align-items: center;
display: flex;
justify-content: space-between;
`
export const TrattoriaContainer = styled.div`
height: 186px;
h4{
    font-size: 18px;
    font-weight: bold;
    color: ${cores.laranja};  
}

h2{
    font-weight: 100;
color: ${cores.branco};
size: 32px;
}

h1{
    font-weight: bold;
color: ${cores.branco};
size: 32px;
}
`