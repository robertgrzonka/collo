const crypto = require('crypto')

const createPass = (value) => {
  secret = value
  const hash = crypto.createHmac('sha256', secret).update('bitches love cake').digest('hex')
  return hash
}

module.exports = createPass
