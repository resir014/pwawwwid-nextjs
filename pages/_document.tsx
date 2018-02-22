import 'isomorphic-unfetch'
import Document, { Head, Main, NextScript } from 'next/document'
import { Context } from 'next'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps(context: Context) {
    const sheet = new ServerStyleSheet()
    const page = context.renderPage((App: React.SFC) => (props: any) =>
      sheet.collectStyles(<App {...props} />),
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="id-ID">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>PWAWWWID Next.js</title>
          <meta name="theme-color" content="#4dba87" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          {this.props.styleTags}
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
