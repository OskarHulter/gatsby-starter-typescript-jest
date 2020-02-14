import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import ListItem from './Item'

const StyledItem = styled.li`
  font-size: 1em;
`

const Song: React.FC<Props> = ({ title, artist, length, releaseDate }) => (
  <StyledItem>
    <ListItem>{title}</ListItem>
    <ListItem>{artist}</ListItem>
    <ListItem>{length}</ListItem>
    <Link to="/">Release Date:{releaseDate}</Link>
  </StyledItem>
)

interface Props {
  title: string
  artist: string
  length: string
  releaseDate?: Date
}

export default Song
