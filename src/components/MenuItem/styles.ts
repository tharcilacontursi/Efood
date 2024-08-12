import styled from 'styled-components'
import { Card as OriginalCard } from '../Restaurante/styles'
import { Titulo as OriginalTitulo } from '../Restaurante/styles'
import { StyledButtonLink as OriginalButton } from '../Button/styles'

import { cores } from '../../styles'

export const MenuCard = styled(OriginalCard)`
  background-color: ${cores.laranja};
  color: ${cores.bege};
  max-width: 320px;
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
`

export const MenuButton = styled(OriginalButton)`
  background-color: ${cores.bege};
  color: ${cores.laranja};
  max-width: 304px;
  width: 100%;
  text-align: center;
`
