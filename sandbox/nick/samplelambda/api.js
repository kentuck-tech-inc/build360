'use strict'

var swaggerJSDoc = require('swagger-jsdoc');
const Api = require('claudia-api-builder')
const api = new Api()

const sampleGet = require('./handlers/sampleGET')
const healthCheck = require('./handlers/healthcheck')

api.get('/', () => Date.now())

api.get('/sampleGET', () => {return sampleGet()})
api.get('/heartbeat', () => {return healthCheck()})

module.exports = api

// swagger definition
var swaggerDefinition = {
  info: {
    title: 'Builder Service',
    version: '1.0.0',
    description: 'Builder Service documentation',
  },
  host: '',
  basePath: '/',
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./handlers/*.js'],
};

// serve swagger
app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);