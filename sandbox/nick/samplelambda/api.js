'use strict'

const Api = require('claudia-api-builder')
const api = new Api()

const sampleGet = require('./handlers/sampleGET')

api.get('/', () => Date.now())

api.get('/sampleGET', () => {return sampleGet()})

module.exports = api