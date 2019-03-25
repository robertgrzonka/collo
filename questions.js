const inquirer = require('inquirer')
const chalk = require('chalk')
const separator = new inquirer.Separator()
const defaultColors = require('./colorPalette.js')
// const clear = require('clear')

const questions = inquirer
  .prompt([ {
    type: 'list',
    name: 'options',
    message: 'What would you like to do now?',
    choices: [
      'See list of default colors',
      'See color in sentence',
      'Edit existing list of colors',
      separator,
      'Exit'
    ],
    filter: value => {
      switch (value) {
        case 'See list of default colors':
          const colors = Object.entries(defaultColors)
          return colors.forEach(color =>
            console.log(chalk`{${color[ 0 ]} • ${color[ 0 ]}: ${color[ 1 ]}}`))
        case 'See color in sentence':
          inquirer.prompt({
            type: 'list',
            message: 'Format:',
            name: 'format',
            choices: [ 'X11', 'RGB', 'HEX', separator, 'Exit' ],
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
          }).then(answers => {
            console.log(answers.format)
          })
          break
        case 'Edit existing list of colors':
          console.log('Place for editing')
          break
        case 'Exit':
          return false
      }
    }
  } ]
  )
  .then(answers => {
    console.log(answers.options)
  })

module.exports = questions
