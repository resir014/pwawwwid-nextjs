import * as React from 'react'
import IndexLayout from '../layouts/index'
import Container from '../components/Container'

interface IndexPageProps {
  status: string
  feed: FeedMetadata
  items: FeedItem[]
}

class IndexPage extends React.Component<IndexPageProps> {
  static async getInitialProps() {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid',
    )
    const body = await response.json()
    return { ...body }
  }

  public render() {
    return (
      <IndexLayout>
        {this.props.items.map(item => (
          <Container key={item.guid}>
            <h2>{item.title}</h2>
          </Container>
        ))}
        <hr />
      </IndexLayout>
    )
  }
}

export default IndexPage
