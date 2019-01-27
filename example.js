'use strict'

const fastify = require('fastify')()

fastify
  .register(require('./index'))
  .after(() => {
    fastify.next('/')
    fastify.next('/hello', (app, req, reply) => {
      // your code
      // `app` is the Next instance
      app.render(req.raw, reply.res, '/hello', req.query, { ui: '/asd' })
    })
  })

fastify.listen(3000, err => {
  if (err) throw err
  console.log('Server listenging on http://localhost:3000')
})
