import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const HeaderContainer = styled.header`
  grid-area: header;
  height: 30vh;
  background: 'purple';
  margin-bottom: 1.45rem;
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  p {
    color: red;
  }
`

const Heading = styled.h1`
  margin: 0;
`

const Header: React.FC<HeaderProps> = ({ siteTitle, ...props }) => (
  <HeaderContainer>
    <Heading>
      <Link to="/">{siteTitle}</Link>
    </Heading>
  </HeaderContainer>
)

interface HeaderProps {
  siteTitle?: string
}

Header.defaultProps = {
  siteTitle: `OSKSAMS Portfolio`,
}

export default Header
