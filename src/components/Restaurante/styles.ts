import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div`
background-color: ${cores.branco};
border: 1px solid ${cores.laranja};
margin-bottom: 40px;
position: relative;
max-width: 472px;



div{
  display: flex;
  justify-content: space-between;
  margin-right: 2px;
}

`

export const ImagemRestaurante = styled.img`
width: 100%;
height: 217px;
max-width: 472px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  color: ${cores.laranja};
  margin-left: 8px;

`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-left: 8px;

`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

