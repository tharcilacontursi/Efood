import styled from "styled-components";
import { Card as OriginalCard } from "../components/Restaurante/styles";
import { Titulo as OriginalTitulo } from "../components/Restaurante/styles";
import { StyledButtonLink as OriginalButton } from "../components/Button/styles";


import { cores } from "../styles";

export const MenuCard = styled(OriginalCard)`
background-color: ${cores.laranja};
color: ${cores.bege};
max-width: 320px;
`

export const MenuTitulo = styled(OriginalTitulo)`
color: ${cores.bege};
`
export const MenuImage = styled.img`
max-width: 304px;
height: 167px;
width: 100%;
margin: 8px;
`

export const MenuButton = styled(OriginalButton)`
background-color: ${cores.bege};
color:${cores.laranja} ;
max-width: 304px;
width: 100%;
text-align: center;
`


