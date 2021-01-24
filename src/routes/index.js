const routeSample = require('./route.sample')

const init = (app) => {
  app.use('/', routeSample)
}

module.exports = init
