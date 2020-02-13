import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import ListItem from './Item'

const StyledItem = styled.li`
  font-size: 1em;
`

const Song: React.FC<Props> = props => (
  <StyledItem>
    <ListItem>{props.title}</ListItem>
    <ListItem>{props.artist}</ListItem>
    <ListItem>{props.length}</ListItem>
    <Link to="/">Release Date:{props.releaseDate}</Link>
  </StyledItem>
)

interface Props {
  title: string
  artist: string
  length: string
  releaseDate?: Date
}

export default Song
