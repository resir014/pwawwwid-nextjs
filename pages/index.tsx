import * as React from 'react'
import striptags from 'striptags'
import IndexLayout from '../layouts/index'
import ArticleItem from '../components/ArticleItem'
import generateId from '../utils/generateId'
import getExcerpt from '../utils/getExcerpt'
import ServiceWorkerWrapper from '../components/ServiceWorkerWrapper'

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
    const body: IndexPageProps = await response.json()
    body.items = body.items.map(item => ({
      ...item,
      id: generateId(item.guid),
      excerpt: striptags(getExcerpt(item.description)),
    }))
    return { ...body }
  }

  public render() {
    return (
      <IndexLayout>
        {this.props.items.map(item => (
          <ArticleItem key={item.guid} article={item} />
        ))}
      </IndexLayout>
    )
  }
}

export default IndexPage
