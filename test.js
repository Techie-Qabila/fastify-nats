'use strict'

const t = require('tap')
const test = t.test
const Fastify = require('fastify')
const fastifyNats = require('./index')

const natsOpt = {
  url: 'nats:demo.nats.io:4222'
}

test('fastify.nats should exist', t => {
  t.plan(3)

  const fastify = Fastify()

  fastify.register(fastifyNats, natsOpt, err => {
    t.error(err)
  })

  fastify.ready(err => {
    t.error(err)
    t.ok(fastify.hasDecorator('nats'))
    t.ok(fastify.nats)

    fastify.close()
  })
})
