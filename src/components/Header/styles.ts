import styled from 'styled-components'
import { cores } from '../../styles'

export const ImagemHeader = styled.div`
  width: 100%;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    padding-top: 40px;
  }
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
`

export const Titulo = styled.h2`
  max-width: 539px;
  color: ${cores.laranja};
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;
  align-items: center;
  display: block;
  margin: 140px auto;
  text-align: center;
`
