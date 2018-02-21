import * as React from 'react'
import styled from 'styled-components'

interface LayoutMainProps {
  className?: string
}

const Main = styled.main`
  flex: 1;
  padding: 0;
  padding-bottom: 3rem;
`

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }) => (
  <Main className={className}>{children}</Main>
)

export default LayoutMain
