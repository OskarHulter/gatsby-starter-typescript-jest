import * as React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div``

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  min-height: 2em;
  background-color: green;
`

const Item: React.FC<Props> = props => (
  <ItemContainer>
    <Button onClick={props.onClick}>{props.children}</Button>
  </ItemContainer>
)

interface Props {
  onClick?: () => {}
}

export default Item
