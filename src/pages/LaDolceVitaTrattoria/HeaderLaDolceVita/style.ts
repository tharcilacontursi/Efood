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
  padding: 80px;
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
height: 280px;
overflow: hidden;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
padding: 24px 80px;
filter: brightness(0.5);
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


