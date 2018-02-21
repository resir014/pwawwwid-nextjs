import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
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
  margin-top: ${dimensions.containerPadding}rem;

  img {
    display: block;
    margin: 0 auto;
  }
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
        <span>31 December 2019</span>
      </ArticleMeta>
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleAuthor>
        <span>{article.author}</span>
      </ArticleAuthor>
      <ArticleThumbnail>
        <img src={article.thumbnail} alt={article.title} />
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
