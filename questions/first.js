const inquirer = require('inquirer')
const colorPalette = require('./colorPalette')
const clear = require('clear')

module.exports = {
  type: 'list',
  name: 'options',
  message: 'What would you like to do now?',
  choices: [
    'See list of colors',
    'See color in sentence',
    'Edit existing list of colors',
    new inquirer.Separator(),
    'Exit'
  ],
  filter: value => {
    switch (value) {
      case 'See list of default colors':
        clear()
        return Object.keys(colorPalette)
      case 'See color in sentence':
        const checkColor = [ {
          type: 'list',
          message: 'Format:',
          name: 'format',
          choices: [ 'name', 'RGB', 'HEX' ],
          validate: value => {
            switch (value) {
              case 'name':
                clear()
                return value
              case 'RGB':
              case 'HEX':
                return 'Unsuported.'
            }
          }
        } ]
        return inquirer.prompt(checkColor)
      case 'Edit existing list of colors':
        return 'Place for editing'
    }
  }
}