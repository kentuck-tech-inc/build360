'use strict'

const Api = require('claudia-api-builder')
const api = new Api()

const builder = require('./handlers/builder')
const healthCheck = require('./handlers/healthcheck')

api.get('/', () => Date.now())

api.get('/builder', (request) => {return builder.GetBuilders()})
api.get('/builder/{id}', (request) => {return builder.GetBuilderByUUID(request.pathParameters.id)})
api.get('/heartbeat', () => {return healthCheck()})

module.exports = api