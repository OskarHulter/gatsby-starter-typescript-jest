import * as React from 'react'
import styled from 'styled-components'
import Song from './Song'
import fetchedSongs from '../fetchedSongs'

const StyledList = styled.ul`
  font-size: 1em;
`

const PlayList = () => {
  const songs = fetchedSongs.map(song => (
    <Song
      key={song.title}
      title={song.title}
      artist={song.artist}
      length={song.length}
    />
  ))

  return <StyledList>{songs}</StyledList>
}

export default PlayList
