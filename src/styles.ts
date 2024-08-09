import { createGlobalStyle } from 'styled-components'

export const cores = {
  laranja: '#E66767',
  branco: '#FFFFFF',
  fundo: '#FFF8F2',
  bege: '#FFEBD9',
}

export const GlobalCss = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Roboto, sans-serif;
}

body {
  background-color: ${cores.fundo};
}

.container {
  max-width: 1024px;
  width: 100%;
margin: 0 auto
}`
