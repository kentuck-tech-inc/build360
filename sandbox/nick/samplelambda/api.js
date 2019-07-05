'use strict'

const Api = require('claudia-api-builder')
const api = new Api()

const sampleGet = require('./handlers/sampleGET')
const healthCheck = require('./handlers/healthcheck')

api.get('/', () => Date.now())

api.get('/sampleGET', () => {return sampleGet()})
api.get('/heartbeat', () => {return healthCheck()})

module.exports = api