const express = require('express')
const healthCheck = require('./handlers/healthcheck')
const app = express()
const port = 3000

app.get('/health', (req, res) => res.status(200).send(healthCheck.healthcheck()))

app.listen(port, () => console.log(`Blueprint app listening on port ${port}`))