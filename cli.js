const question = [
  {
    type: 'input',
    message: 'Enter word to encrypt.',
    name: 'Encrypted word',
    validate: requireString = value => {
      if (typeof value === 'string') {
        return true
      }
      return new Error('Value needs to be string.')
    }
  }
]

module.exports = question
