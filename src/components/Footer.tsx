import * as React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  grid-area: footer;
  height: 15vh;
  p {
    color: red;
  }
`

const Footer: React.FC = () => (
  <FooterContainer>
    <p>© {new Date().getFullYear()} Samani och Oskars portfolio project!</p>
  </FooterContainer>
)

export default Footer
