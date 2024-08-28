import styled from 'styled-components'
import lixeira from '../../assets/images/lixeira.png'
import { cores } from '../../styles'

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
  display: none;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.laranja};
  z-index: 1;
  padding: 40px 16px 0 16px;

  p {
    font-weight: bold;
    font-size: 14px;
    color: ${cores.bege};
    margin-bottom: 16px;
  }
`
export const CartButton = styled.button`
  background-color: ${cores.bege};
  color: ${cores.laranja};
  max-width: 344px;
  width: 344px;
  height: 24px;
  font-weight: bold;
  font-size: 14px;
  border: none;
`

export const CartItem = styled.li`
  display: flex;
  margin-bottom: 16px;
  background-color: ${cores.bege};
  width: 344px;
  height: 100px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 8px;
  }

  h3 {
    font-size: 18px;
    color: ${cores.laranja};
    margin: 8px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    color: ${cores.laranja};
    margin: 45px 0 21px 8px;
  }
  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    right: 0;
    top: 76px;
    margin: 0 8px 8px 0;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 8px;
`
