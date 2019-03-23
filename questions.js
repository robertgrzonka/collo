const requireString = value => {
  if (typeof value === 'string') {
    return true
  }
  return new Error('Value needs to be string.')
}

const questions = [
  {
    type: 'input',
    message: 'Select color. For list of available colors type collo --colors',
    name: 'color',
    validate: requireString
  }
]

module.exports = questions
