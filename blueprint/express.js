const express = require('express')
require('dotenv').config()

const blueprint = require('./handlers/blueprint')
const healthCheck = require('./handlers/healthcheck')

const app = express()
const port = 3000

app.get('/builder', async (req, res) => {
    let tmp = await blueprint.GetBlueprints();
    res.status(200).send(tmp)
});
app.get('/health', (req, res) => res.status(200).send(healthCheck.healthcheck()))

app.listen(port, () => console.log(`Blueprint app listening on port ${port}`))