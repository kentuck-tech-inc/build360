const express = require('express')
const healthCheck = require('./handlers/healthcheck')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/health', (req, res) => res.status(200).send(healthCheck.healthcheckGET()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))