const routeSample = require('./route.sample')

const init = (app) => {
  app.use('/messages', routeSample)
}

module.exports = init
