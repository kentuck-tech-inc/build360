'use strict'

const Api = require('claudia-api-builder')
const api = new Api()

const blueprint = require('./handlers/blueprint')
const healthCheck = require('./handlers/healthcheck')

api.get('/', () => Date.now())

api.get('/builder', async () => { return await blueprint.GetBlueprints()})
api.get('/heartbeat', () => {return healthCheck.healthcheck()})

module.exports = api