const express = require('express')
var swaggerJSDoc = require('swagger-jsdoc')
const healthCheck = require('./handlers/healthcheck')
const app = express()
const port = 3000

app.use('/api-docs', express.static('api-docs'));
app.get('/builders', (request) => {return builder.GetBuilders()})
app.get('/builders/{zip}', (request) => {return builder.GetBuildersByZipcode(request.pathParams.zip)})
app.get('/builder/{id}', (request) => {return builder.GetBuilderByUUID(request.pathParams.id)})
app.get('/builder/{id}/portfolio', (request) => {return builder.GetBuilderPortfolio()})
app.get('/builder/{id}/contact', (request) => {return builder.GetBuilderContact()})
app.get('/builder/{id}/feedback', (request) => {return builder.GetBuilderFeedback()})
app.get('/builder/{id}/location', (request) => {return builder.GetbuilderLocation()})
app.get('/health', (req, res) => res.status(200).send(healthCheck.healthcheckGET()));


// swagger definition
var swaggerDefinition = {
    info: {
      title: 'Builder Service',
      version: '1.0.0',
      description: 'Builder Service SWAGGER',
    },
    host: 'localhost:3000',
    basePath: '/',
  };
  
  // options for the swagger docs
  var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./handlers/*.js'],
  };
  
  // initialize swagger-jsdoc
  var swaggerSpec = swaggerJSDoc(options);
  
  // serve swagger
  app.get('/swagger.json', function(req, res) {
      res.setHeader('Content-Type', 'application/json');
      res.send(swaggerSpec);
    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))