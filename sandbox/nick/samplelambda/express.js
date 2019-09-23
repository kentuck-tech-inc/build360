const express = require('express')
var swaggerJSDoc = require('swagger-jsdoc')
const sample = require ('./handlers/sampleGET')
const healthCheck = require('./handlers/healthcheck')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

//app.get('/api-docs/', (req,res)=>res.sendFile(path.join(__dirname +'api-docs/index.html')))
app.use('/api-docs', express.static('api-docs'));
app.get('/sampleGet', (req, res) => res.send(200).send(sample.SampleGet));
app.post('/samplePost', (req, res) => res.send(200).send(sample.SamplePost));

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