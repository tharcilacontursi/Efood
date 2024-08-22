import styled from 'styled-components'

import { cores } from '../styles'

export const Container = styled.section`
  width: 100%;
  height: 466px;
  margin-bottom: 80px;
  background-repeat: no-repeat;
`

export const LogoContainer = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`

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
`

export const TrattoriaContainer = styled.div`
  position: relative;

  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }

  .container {
    position: relative;
    width: 100%;
    height: 280px;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    z-index: 1;
  }

  h2,
  h1 {
    color: ${cores.branco};
    font-size: 32px;
  }

  h2 {
    font-weight: 100;
    line-height: 37.5px;
    margin-top: 25px;
  }

  h1 {
    font-weight: bold;
    margin-bottom: 25px;
  }
`
