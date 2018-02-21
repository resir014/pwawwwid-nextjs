import * as React from 'react'

declare module 'next' {
  export interface Context {
    pathname: string
    query: any
    asPath: string
    req: {
      locale: string
      localeDataScript: string
      messages: object
      antdLocale: object
    }
    res?: object
    renderPage: (cb: Function) => object
  }
}
