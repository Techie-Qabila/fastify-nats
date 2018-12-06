# fastify-nats

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![npm version](https://img.shields.io/npm/v/fastify-nats.svg?style=flat-square)](https://www.npmjs.com/package/fastify-nats)
[![npm downloads](https://img.shields.io/npm/dm/fastify-nats.svg?style=flat-square)](https://www.npmjs.com/package/fastify-nats)

[NATS](http://nats.io) Server is a simple, high performance open source messaging system for cloud native applications, IoT messaging, and microservices architectures.

Under the hood [NATS](https://github.com/nats-io/node-nats) client is used, the options that you pass to `register` will be passed to the nats client.


## Install
```
npm i fastify-nats --save
```


## Usage
Add it to you project with `register` and you are done!  
You can access the *nats Connection* via `fastify.nats`.
```js
const fastify = require('fastify')

fastify.register(require('fastify-nats'), {
  url: 'nats://demo.nats.io:4222'
}, err => {
  if (err) throw err
})

fastify.listen(3000, (err, address) => {
  if (err) throw err
  console.log(`server listening on ${address}`)
})
```

and later
```js
fastify.nats.publish(topic, message);
```


## Requirements

Fastify ^1.1.0 .
Node.js 8.14.x or later.


## License

Licensed under [MIT](./LICENSE).

----
