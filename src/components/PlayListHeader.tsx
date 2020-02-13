import * as React from 'react'
import styled from 'styled-components'
import Song from './Song'
import Item from './Item'

const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
`

const sort = () => {}

const PlayListHeader = () => {
  return (
    <HeaderContainer>
      <Item onClick={props.onClick}>Title</Item>
      <Item onClick={() => sort}>Artist</Item>
      <Item onClick={() => sort}>Length</Item>
    </HeaderContainer>
  )
}

export default PlayListHeader
