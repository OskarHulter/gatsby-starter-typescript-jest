import * as React from "react"
import styled from "styled-components"

const ContentContainer = styled.main`
  grid-area: content;
  height: 55vh;
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Content: React.FC<Props> = (props: Props) => (
  <ContentContainer>{props.children}</ContentContainer>
)

interface Props {
  children?: any
}

export default Content
