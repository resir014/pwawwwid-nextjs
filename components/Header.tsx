import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { dimensions, heights, colors } from '../styles/styles'
import Container from './Container'

interface HeaderProps {
  menuItems: HeaderMenuItem[]
}

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.black};
  color: ${colors.white};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HeaderMenuItem = styled.span`
  padding-right: ${dimensions.containerPadding}rem;

  &:last-child {
    padding-right: 0;
  }
`

const Header: React.SFC<HeaderProps> = ({ menuItems }) => (
  <StyledHeader>
    <HeaderInner>
      {menuItems.map((item, i) => (
        <HeaderMenuItem key={`nav-link-${i}`}>
          <Link href={item.href}>
            <a>{item.label}</a>
          </Link>
        </HeaderMenuItem>
      ))}
    </HeaderInner>
  </StyledHeader>
)

export default Header
