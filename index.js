'use strict'

const fp = require('fastify-plugin')
const NATS = require('nats')

function fastifyNats (fastify, options, next) {
  const nats = NATS.connect(options)
  nats.on('connect', nc => {
    fastify
      .decorate('nats', nats)
      .addHook('onClose', close)
    next()
  })

  nats.on('error', err => {
    next(err)
  })
}

function close (fastify, done) {
  fastify
    .nats
    .close()

  done()
}

module.exports = fp(fastifyNats, {
  fastify: '>=1.0.0',
  name: 'fastify-nats'
})
