const requireString = value => {
  if (typeof value === 'string') {
    return true
  }
  return new Error('Value needs to be string.')
}

const questions = [
  {
    type: 'input',
    message: 'Name your token',
    name: 'key',
    validate: requireString
  }, {
    type: 'input',
    message: 'Enter word to encrypt',
    name: 'value',
    validate: requireString
  }
]

module.exports = questions
