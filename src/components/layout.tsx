import * as React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './layout.css'

const LayoutGrid = styled.div`
  display: grid;
  grid-template-areas:
    'header header header'
    'content content content'
    'footer footer footer';
`

const Layout = (props: LayoutProps) => (
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
      <LayoutGrid>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>{props.children}</Content>
        <Footer />
      </LayoutGrid>
    )}
  />
)

interface LayoutProps {
  children: any
}

export default Layout
