const Inquirer = require('inquirer')
const colors = [ 'black', 'white', 'red', 'green', 'blue', 'yellow' ]

const questions = [
  {
    type: 'list',
    name: 'options',
    message: 'What would you like to do now?',
    choices: [
      'See list of colors',
      'See color in sentence',
      'Edit existing list of colors',
      new Inquirer.Separator(),
      'Exit'
    ],
    filter: value => {
      switch (value) {
        case 'See list of colors':
          return colors.join('\n•')
        case 'See color in sentence':
          const checkColor = [
            {
              type: 'list',
              message: 'Format:',
              name: 'format',
              choices: [ 'RGB', 'HEX' ],
              validate: value => {
                switch (value) {
                  case 'RGB':
                    return
                  case 'HEX':
                    return
                  default:
                    return 'Unsuported.'
                }
              }
            },
            {
              type: 'input',
              message: ''
            }
          ]
          return Inquirer.prompt(checkColor)
        case 'Edit existing list of colors':
          return 'Place for editing'
        default:
          return 'Bla bla bla'
      }
    }
  },
  {
    type: 'input',
    name: 'color',
    message: 'Select color',
    validate: value => {
      if (typeof value !== 'string') {
        return 'Value have to be string.'
      }
      return true
    }
  }
]

module.exports = questions
