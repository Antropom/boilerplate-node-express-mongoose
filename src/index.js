const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const routes = require('./routes/index')

app.use(cors())

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use('/', routes)

const { SERVER_PORT } = process.env

app.listen(SERVER_PORT, () => {
  console.log(`Connected, listen on port ${SERVER_PORT}`)
})
