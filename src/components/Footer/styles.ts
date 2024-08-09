import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${cores.bege};
  width: 100%;

  color: ${cores.laranja};
  padding: 20px;
  text-align: center;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  margin: 0px auto;
  display: block;
  padding: 40px;
`

export const SocialmidiaContainer = styled.div`
  display: block;
  justify-content: center;
  margin-bottom: 60px;

  img {
    margin-right: 8px;
  }
`

export const Paragrafo = styled.p`
  width: 480px;
  line-height: 11.72px;
  text-align: center;
  margin: 0 auto;
  font-size: 10px;
`
