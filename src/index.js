const app = require('./app')

const { SERVER_PORT } = process.env

app.listen(SERVER_PORT, () => {
  console.log(`Connected, listen on port ${SERVER_PORT}`)
})
