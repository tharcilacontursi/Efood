import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const StyledButtonLink = styled(Link)`
  background-color: ${cores.laranja};
  max-width: 84px;
  color: ${cores.bege};
  font-weight: bold;
  font-size: 14px;
  align-items: center;
  display: inline-block;
  padding: 4px 6px;
  text-decoration: none;
  margin: 8px;
  margin-top: auto;
  margin-bottom: 8px;
`
