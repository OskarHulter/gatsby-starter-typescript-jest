import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Image from '../components/image'
import SEO from '../components/seo'
import MenuContainer from '../components/Hamburger/MenuContainer'
import { createGlobalStyle } from 'styled-components'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faCheckSquare, faCoffee)

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <MenuContainer />
    <Image />
    <Link to="/MusicPlayer/">Music Player</Link>
  </Layout>
)

export default IndexPage
