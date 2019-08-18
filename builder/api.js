'use strict'

const Api = require('claudia-api-builder')
const api = new Api()

const builder = require('./handlers/builder')
const healthCheck = require('./handlers/healthcheck')

api.get('/', () => Date.now())

api.get('/builder', () => {return builder.GetBuilders()})
api.get('/heartbeat', () => {return healthCheck()})

module.exports = api