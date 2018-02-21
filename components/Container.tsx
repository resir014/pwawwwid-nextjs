import * as React from 'react'
import styled from 'styled-components'
import { getEmSize } from '../styles/mixins'
import { widths } from '../styles/styles'

interface ContainerProps {
  className?: string
}

const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getEmSize(widths.lg)}em;
`

const Container: React.SFC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)

export default Container
