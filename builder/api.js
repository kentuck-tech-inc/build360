'use strict'

const Api = require('claudia-api-builder')
const api = new Api()

const builder = require('./handlers/builder')
const healthCheck = require('./handlers/healthcheck')

api.get('/', () => Date.now())

api.get('/builders', (request) => {return builder.GetBuilders()})
api.get('/builders/{zip}', (request) => {return builder.GetBuildersByZipcode(request.pathParameters.zip)})
api.get('/builder/{id}', (request) => {return builder.GetBuilderByUUID(request.pathParameters.id)})
api.get('/builder/{id}/portfolio', (request) => {return builder.GetBuilderPortfolio()})
api.get('/builder/{id}/contact', (request) => {return builder.GetBuilderContact()})
api.get('/builder/{id}/feedback', (request) => {return builder.GetBuilderFeedback()})
api.get('/builder/{id}/location', (request) => {return builder.GetbuilderLocation()})
api.get('/heartbeat', () => {return healthCheck.healthcheckGET()})

module.exports = api