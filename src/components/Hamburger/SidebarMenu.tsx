import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const SidebarMenu: React.FC<Props> = ({ open, ...props }) => (
  <StyledMenu open={open}>
    <Link to="/">Menu Item 1</Link>
    <Link to="/MusicPlayer/">Menu Item 2</Link>
    <Link to="/MusicPlayer/">Menu Item 3</Link>
  </StyledMenu>
)

interface Props {
  open: boolean
}

const StyledMenu = styled.nav<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

export default SidebarMenu
