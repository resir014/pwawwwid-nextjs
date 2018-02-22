import * as React from 'react'

import '../styles/normalize'

import LayoutRoot from '../components/LayoutRoot'
import Header from '../components/Header'
import LayoutMain from '../components/LayoutMain'
import menuItems from '../utils/menuItems'
import * as sw from '../utils/serviceWorker'

export default class IndexLayout extends React.Component {
  public componentDidMount() {
    sw.register({})
  }

  public render() {
    return (
      <LayoutRoot>
        <Header menuItems={menuItems} />
        <LayoutMain>{this.props.children}</LayoutMain>
      </LayoutRoot>
    )
  }
}
