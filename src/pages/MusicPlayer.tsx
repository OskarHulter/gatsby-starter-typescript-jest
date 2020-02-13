import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import PlayList from '../components/PlayList'
import PlayListHeader from '../components/PlayListHeader'

const MusicPlayer = () => (
  <Layout>
    <SEO title="Music Player" />
    <PlayListHeader />
    <PlayList />
    <Link to="/">Enjoy the music</Link>
  </Layout>
)

export default MusicPlayer
