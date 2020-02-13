import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Image from '../components/image'
import SEO from '../components/seo'
import styled from 'styled-components'
import MenuContainer from '../components/Hamburger/MenuContainer'

const ImageContainer = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MenuContainer />
    <ImageContainer>
      <Image />
    </ImageContainer>
    <Link to="/MusicPlayer/">Music Player</Link>
  </Layout>
)

export default IndexPage
