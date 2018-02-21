import * as React from 'react'
import IndexLayout from '../layouts/index'
import Container from '../components/Container'
import { Context } from 'next'

interface IndexPageProps {
  id: string | number
}

class IndexPage extends React.Component<IndexPageProps> {
  static async getInitialProps({ query }: Context) {
    return { id: query.id }
  }

  public render() {
    return (
      <IndexLayout>
        <Container>
          <h2>{this.props.id}</h2>
        </Container>
      </IndexLayout>
    )
  }
}

export default IndexPage
