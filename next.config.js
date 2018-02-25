const withOffline = require('next-offline')
const withTypeScript = require('@zeit/next-typescript')
const {
  WebpackBundleSizeAnalyzerPlugin,
} = require('webpack-bundle-size-analyzer')

module.exports = withTypeScript(
  withOffline({
    dontAutoRegisterSw: true,
    exportPathMap: async () => {
      const response = await fetch(
        'https://medium.com/wwwid/latest?format=json',
      )
      const body = JSON.parse(response.substr(response.indexOf('{')))

      const pages = body.payload.posts.reduce((pages, post) =>
        Object.assign({}, pages, {
          [`/p/${post.id}`]: {
            page: '/post',
            query: { id: post.id },
          },
        }),
      )

      return Object.assign({}, pages, {
        '/': { page: '/' },
      })
    },
    webpack: (config, { isServer, dev, buildId, config: { distDir } }) => {
      if (isServer || dev) {
        return config
      }

      if (process.env.NPM_CONFIG_REPORT) {
        config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'))
      }

      return config
    },
    workboxOpts: {
      runtimeCaching: [
        {
          urlPattern: /.png$/,
          handler: 'staleWhileRevalidate',
        },
        {
          urlPattern: /api\.json/,
          handler: 'staleWhileRevalidate',
          options: {
            cacheableResponse: {
              statuses: [0, 200],
              headers: {
                'x-test': 'true',
              },
            },
          },
        },
      ],
    },
  }),
)
