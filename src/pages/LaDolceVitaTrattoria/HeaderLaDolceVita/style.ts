import styled from "styled-components";
import tratoria from '../../../assets/images/tratoria.png';

import { cores } from "../../../styles";

export const Container = styled.section`
  width: 100%;
  height: 466px;
  margin-bottom: 80px;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;


export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  
h4 {
  font-size: 18px;
  font-weight: bold;
  color: ${cores.laranja};
}
`;

export const TrattoriaContainer = styled.div`
position: relative;



&::after{
  position: absolute;
  background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
}

.container{
  z-index: 1;
position: relative;
height: 280px;
overflow: hidden;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
padding: 24px 80px;
}

h2, h1 {
    color: ${cores.branco};
    font-size: 32px;
}

h2 {
    font-weight: 100;
    line-height: 37.5px;
}

h1 {
    font-weight: bold;
}


`


