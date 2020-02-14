import * as React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { GlobalStyling } from './global'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faCheckSquare, faCoffee)

const Layout: React.FC<Props> = ({ children, ...props }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyling />
          <LayoutGrid>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Content>{children}</Content>
            <Footer />
          </LayoutGrid>
        </>
      </ThemeProvider>
    )}
  />
)

interface Props {
  children: any
}

const LayoutGrid = styled.div`
  display: grid;
  grid-template-areas:
    'header header header'
    'content content content'
    'footer footer footer';
`

export default Layout
