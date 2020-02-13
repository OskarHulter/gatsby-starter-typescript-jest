import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderContainer = styled.header`
  background: "purple";
  margin-bottom: 1.45rem;
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  p {
    color: red;
  }
  grid-area: header;
  height: 30vh;
`

const Heading = styled.h1`
  margin: 0;
`

const Header: React.FC<HeaderProps> = (props: HeaderProps) => (
  <HeaderContainer>
    <Heading>
      <Link to="/">{props.siteTitle}</Link>
    </Heading>
  </HeaderContainer>
)

interface HeaderProps {
  siteTitle?: string
}

Header.defaultProps = {
  siteTitle: `OSKSAMS AMAZING HEMSIDA`,
}

export default Header
