import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
export const GlobalStyle = createGlobalStyle`
${reset}

h1,h2,h3,h4,h5,h6 {
  font-size: 3rem;
  font-family: 'Noto Sans JP Variable', sans-serif;
}
`
