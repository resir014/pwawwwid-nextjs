import * as React from 'react'
import IndexLayout from '../layouts/index'
import Container from '../components/Container'

interface IndexPageProps {
  id: string | number
}

class IndexPage extends React.Component<IndexPageProps> {
  public render() {
    return (
      <IndexLayout>
        <Container>
          <h2>About</h2>
        </Container>
      </IndexLayout>
    )
  }
}

export default IndexPage
