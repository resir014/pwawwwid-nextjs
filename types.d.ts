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
