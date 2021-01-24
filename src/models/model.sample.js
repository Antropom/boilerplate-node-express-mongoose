const mongoose = require('mongoose')

const testMessage = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    trim: true,
  },
  optional: {
    type: String,
    required: false,
  },
})

testMessage.methods.log = function () {
  const messageLog = this.optionnal
    ? this.message + ' optionnal : ' + this.optionnal
    : this.message
  console.log(messageLog)
}

const MessageLog = mongoose.model('MessageLog', testMessage)
