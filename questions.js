const Inquirer = require('inquirer')
const clear = require('clear')

const defaultColors = require('./colorPalette.js')

const questions = [ {
  type: 'list',
  name: 'colors',
  message: 'What would you like to do now?',
  choices: [
    'See list of default colors',
    'See color in sentence',
    'Edit existing list of colors',
    new Inquirer.Separator(),
    'Exit'
  ],
  filter: value => {
    switch (value) {
      case 'See list of default colors':
        return Object.entries(defaultColors)
      case 'See color in sentence':
        const checkColor = [ {
          type: 'list',
          message: 'Format:',
          name: 'format',
          choices: [ 'X11', 'RGB', 'HEX' ],
          validate: value => {
            switch (value) {
              case 'X11':
                console.log(value)
                break
              case 'RGB':
              case 'HEX':
                return 'Unsuported.'
            }
          }
        } ]
        return Inquirer.prompt(checkColor)
      case 'Edit existing list of colors':
        console.log('Place for editing')
    }
  }
} ]

module.exports = questions
