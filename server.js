const fs = require('fs')
const path = require('path')
const http = require('http')
const micro = require('micro')
const next = require('next')
const Router = require('router')
const finalhandler = require('finalhandler')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const page = async (req, res) => {
  req.url = req.originalUrl
  micro.send(res, 200, await handle(req, res))
}

const post = (req, res) => {
  return app.render(req, res, '/post', {
    id: req.params.id,
  })
}

const static = (req, res, dest) => {
  return new Promise((resolve, reject) => {
    if (!dest || typeof dest !== 'string') {
      dest = `.${req.originalUrl}`
    }

    fs.readFile(dest, (err, data) => {
      if (err) {
        reject(err)
        return
      }

      if (/\.js$/.test(dest)) {
        res.setHeader('Content-Type', 'application/javascript')
      } else if (/\.json$/.test(dest)) {
        res.setHeader('Content-Type', 'application/json')
      } else if (/\.ico$/.test(dest)) {
        res.setHeader('Content-Type', 'image/x-icon')
      }

      micro.send(res, 200, data)

      resolve()
    })
  })
}

app.prepare().then(() => {
  const router = new Router({ mergeParams: true })
  const staticRedirects = {
    '/sw.js': './static/workbox/sw.js',
    '/manifest.json': './static/manifest.json',
    '/favicon.ico': './static/favicon.ico',
  }

  for (const [k, v] of Object.entries(staticRedirects)) {
    router.get(k, async (req, res) => await static(req, res, v))
  }

  router.use('/_next', page)
  router.use('/static', static)
  router.get('/p/:id', post)
  router.get('/', page)

  const server = micro((req, res) => router(req, res, finalhandler(req, res)))
  server.listen(3000)
  console.log(`> Ready on http://localhost:${port}`)
})
