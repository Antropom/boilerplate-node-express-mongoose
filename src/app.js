require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
require('./config/db')
const routes = require('./routes/index')

app.use(cors())

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use('/', routes)

module.exports = app
