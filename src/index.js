const express = require('express')
const app = express()
const db = require('./config/db')
require('dotenv').config()
const routes = require('./routes/index')

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

routes(app)

const { SERVER_PORT } = process.env

app.listen(SERVER_PORT, () => {
  console.log(`Connected, listen on port ${SERVER_PORT}`)
})
