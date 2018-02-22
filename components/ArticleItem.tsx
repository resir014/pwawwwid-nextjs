import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import { colors, dimensions } from '../styles/styles'
import Container from './Container'

interface ArticleItemProps {
  className?: string
  article: FeedItem
}

const StyledArticleItem = styled.div`
  margin: 0;
  padding: ${dimensions.containerPadding}rem;
  border-top: 1px solid ${colors.border};

  &:last-of-type {
    border-bottom: 1px solid ${colors.border};
  }
`

const ArticleTitle = styled.h2`
  margin-top: 1rem;
  margin-bottom: 0;

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`

const ArticleMeta = styled.div`
  span {
    margin: 0;
    font-size: 90%;
    color: ${colors.muted};
  }
`

const ArticleAuthor = styled.div`
  margin-top: 1rem;
`

const ArticleBody = styled.div`
  margin-top: ${dimensions.containerPadding}rem;
`

const ArticleThumbnail = styled.div`
  position: relative;
  height: 380px;
  margin-top: ${dimensions.containerPadding}rem;

  img {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`

const ArticleThumbnailPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.whisper};
`

const ArticleFooter = styled.div`
  margin-top: 1rem;

  a {
    font-size: 90%;
    text-transform: uppercase;
    text-decoration: underline;
  }
`

const ArticleItem: React.SFC<ArticleItemProps> = ({ article, className }) => (
  <StyledArticleItem className={className}>
    <Container>
      <ArticleMeta>
        <span>{new Date(article.pubDate).toDateString()}</span>
      </ArticleMeta>
      <ArticleTitle>
        <Link href={`/p/${article.id}`}>
          <a>{article.title}</a>
        </Link>
      </ArticleTitle>
      <ArticleAuthor>
        <span>{article.author}</span>
      </ArticleAuthor>
      <ArticleThumbnail>
        <LazyLoad
          throttle={200}
          height="100%"
          placeholder={<ArticleThumbnailPlaceholder />}
        >
          <img src={article.thumbnail} alt={article.title} />
        </LazyLoad>
      </ArticleThumbnail>
      <ArticleBody>{article.excerpt}</ArticleBody>
      <ArticleFooter>
        <Link href={`/p/${article.id}`}>
          <a>Baca Selengkapnya</a>
        </Link>
      </ArticleFooter>
    </Container>
  </StyledArticleItem>
)

export default ArticleItem
