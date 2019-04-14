const chalk = require('chalk')
const inquirer = require('inquirer')
const separator = new inquirer.Separator()
const colorPalette = require('./colorPalette')

const question = chalk.bold.yellow

module.exports = {
  first: {
    type: 'list',
    name: 'menu',
    message: question('What would you like to do? 🤔 '),
    choices: [
      'See list of colors',
      'See color in sentence',
      'Edit existing list of colors',
      'Set default color palette',
      separator,
      'Exit'
    ]
  },
  second: {
    type: 'list',
    message: question('Choose color for tests:'),
    name: 'testColor',
    choices: Object.keys(colorPalette)
  },
  third: {
    type: 'list',
    message: question('Which value would you like to change:'),
    name: 'changeColor',
    choices: Object.keys(colorPalette)
  },
  fourth: {
    type: 'input',
    message: question('Write new value in HEX format:'),
    name: 'format'
  },
  fifth: {
    type: 'confirm',
    name: 'setDefaults',
    message: question('Are you sure you want get back to default color palette?'),
    default: false
  },
  sixth: {
    type: 'confirm',
    name: 'next',
    message: question('Would you like to do something else?'),
    default: false
  }
}
