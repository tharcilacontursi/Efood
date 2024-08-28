import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { MenuButton } from '../MenuItem/styles'

export const MenuUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${cores.laranja};
  color: ${cores.branco};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 344px;

  .close-icon {
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
    width: 16px;
    height: 16px;
    z-index: 1;
    margin: 8px;
  }

  .itemMenu-image {
    height: 280px;
    width: 280px;
    margin: 32px;
    object-fit: cover;
  }
  .content {
    h4 {
      font-weight: 900;
      font-size: 18px;
      line-height: 21.09px;
      align-items: center;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      text-align: left;
    }

    ${MenuButton} {
      width: 218px;
      height: 24px;
      padding: px;
      margin: 16px 0;
    }
  }
`
