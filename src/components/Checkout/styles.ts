import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  display: flex;
`
export const Sidebar = styled.aside`
  background-color: ${cores.laranja};
  z-index: 1;
  padding: 40px 16px 0 16px;
  width: 360px;

  h2 {
    font-size: 16px;
    line-height: 19px;
    color: ${cores.bege};
    margin-bottom: 16px;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .cep-numero {
    display: flex;
    gap: 16px;
  }

  .buttons {
    display: block;
    margin-top: 20px;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    line-height: 17px;
    color: ${cores.bege};
    font-weight: bold;
  }

  input {
    background-color: ${cores.bege};
    border: none;
    height: 32px;
    margin-top: 8px;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`
export const CartButton = styled.button`
  background-color: ${cores.bege};
  color: ${cores.laranja};
  max-width: 344px;
  width: 100%;
  height: 24px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  padding: 4px;
  margin-top: 8px;
`
