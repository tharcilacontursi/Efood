import styled from 'styled-components'
import {
  Card as OriginalCard,
  Titulo as OriginalTitulo,
} from '../Restaurant/styles'

import { Link } from 'react-router-dom'
import { breakpoints, cores } from '../../styles'

export const MenuCard = styled(OriginalCard)`
  background-color: ${cores.laranja};
  color: ${cores.bege};
  max-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  position: relative;
`

export const MenuTitulo = styled(OriginalTitulo)`
  color: ${cores.bege};
`

export const Descricao = styled.p`
  color: ${cores.bege};
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-left: 8px;
  font-weight: 400;
`

export const MenuImage = styled.img`
  max-width: 304px;
  height: 167px;
  width: 100%;
  margin: 8px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    margin: 0 auto;
    padding: 8px;
  }
`

export const MenuButton = styled(Link).attrs((props) => ({
  as: props.as || Link,
}))`
  align-items: center;
  background-color: ${cores.bege};
  color: ${cores.laranja};
  max-width: 304px;
  width: 100%;
  text-align: center;
  margin: 8px;
  display: inline-block;
  text-decoration: none;
  height: 24px;
  font-weight: bold;
  padding: 3px;
  border: none;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 200px;
  }
`
