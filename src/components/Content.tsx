import * as React from 'react'
import styled from 'styled-components'

const Content: React.FC<Props> = ({ children, ...props }) => (
  <ContentContainer>{children}</ContentContainer>
)

interface Props {
  children?: any
}

const ContentContainer = styled.main`
  grid-area: content;
  height: 55vh;
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

export default Content
