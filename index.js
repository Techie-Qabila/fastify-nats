'use strict'

const fp = require('fastify-plugin')
const NATS = require('nats')

function fastifyNats (fastify, options, next) {
  const nats = NATS.connect(options)

  nats.on('connect', (nc) => {
    fastify.decorate('nats', nats)
    fastify.addHook('onClose', (instance, done) => {
      instance.nats.close()
      done()
    })

    next()
  })

  nats.on('error', (err) => {
    next(err)
  })
}

module.exports = fp(fastifyNats, {
  fastify: '1.x',
  name: 'fastify-nats'
})
