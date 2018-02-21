declare interface PostInfo {
  userId: number
  id: number
  title: string
  body: string
}

declare interface PageContext {
  pathname: string
  query: { [key: string]: any }
  asPath: string
  req: Request
  res: Response
  jsonPageRes: { [key: string]: any }
  err: Error
}

declare interface HeaderMenuItem {
  href: string
  label: string
}

declare interface FeedMetadata {
  author?: string
  description?: string
  image?: string
  link: string
  title: string
  url: string
}

declare interface FeedItem {
  guid: string
  title: string
  link: string
  author: string
  thumbnail: string
  pubDate: string
  categories?: string[]
  description: string
  content: string
}
