const express = require('express')
const app = express()
require('dotenv').config()
const routes = require('./routes/index')

routes(app)

const { SERVER_PORT } = process.env

app.listen(SERVER_PORT, () => {
  console.log(`Connected, listen on port ${SERVER_PORT}`)
})
