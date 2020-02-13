import * as React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  p {
    color: red;
  }
  grid-area: footer;
  height: 15vh;
`

const Footer: React.FC = () => (
  <FooterContainer>
    <p>© {new Date().getFullYear()} Samani och Oskars portfolio project!</p>
  </FooterContainer>
)

export default Footer
