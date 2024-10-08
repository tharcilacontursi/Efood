import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section``

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 48px;
  margin-top: 40px;
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
