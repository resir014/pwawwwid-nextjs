import * as React from 'react'
import LayoutRoot from '../components/LayoutRoot'

import '../styles/normalize'
import Header from '../components/Header'
import menuItems from '../utils/menuItems'
import LayoutMain from '../components/LayoutMain'

export default class IndexLayout extends React.Component {
  public render() {
    return (
      <LayoutRoot>
        <Header menuItems={menuItems} />
        <LayoutMain>{this.props.children}</LayoutMain>
      </LayoutRoot>
    )
  }
}
