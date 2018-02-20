const withTypeScript = require('@zeit/next-typescript')
const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer')
const NextWorkboxWebpackPlugin = require('@pwa/next-workbox-webpack-plugin')

module.exports = withTypeScript({
  webpack: (config, { isServer, dev, buildId, config: { distDir }}) => {
    if (isServer || dev) {
      return config
    }

    config.plugins.push(
      new NextWorkboxWebpackPlugin({
        distDir,
        buildId,
        precacheManifest: true
      })
    )

    if (process.env.NPM_CONFIG_REPORT) {
      config.plugins.push(
        new WebpackBundleSizeAnalyzerPlugin('stats.txt')
      )
    }

    return config
  }
})
