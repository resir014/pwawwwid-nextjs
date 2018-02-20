import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="id-ID">
        <Head>
          <title>PWAWWWID Next.js</title>
          <link rel="shortcut icon" href="/favicon.ico" />
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
