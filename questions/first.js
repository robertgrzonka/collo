const inquirer = require('inquirer')
const colorPalette = require('../colorPalette')
const separator = new inquirer.Separator()
const chalk = require('chalk')

// const warning = chalk.bold.red
// const success = chalk.bold.green
const question = chalk.bold.yellow
const info = chalk.bold.blue

module.exports = {
  type: 'list',
  name: 'options',
  message: question('Hi! What would you like to do? 🤔'),
  choices: [
    'See list of colors',
    'See color in sentence',
    'Edit existing list of colors',
    separator,
    'Exit'
  ],
  filter: value => {
    switch (value) {
      case 'See list of colors':
        return console.table(Object.entries(colorPalette))
      case 'See color in sentence':
        return inquirer.prompt({
          type: 'list',
          message: question('Choose format of your color:'),
          name: 'format',
          choices: [
            'RGB',
            'HEX',
            separator,
            'Exit'
          ]
        }).then(answers => {
          if (answers.format !== 'RGB') {
            inquirer.prompt({
              type: 'input',
              message: question('Write your color in HEX format (i.e. "#FFFFFF")'),
              name: 'hex'
            })
            return answers
          }
          inquirer.prompt({
            type: 'input',
            message: question('Write your color in RGB format (i.e. "rgb(255, 255, 255)")'),
            name: 'rgb'
          })
          return answers
        })
      case 'Edit existing list of colors':
        return inquirer.prompt({
          type: 'list',
          message: question('Which value would you like to change:'),
          name: 'change',
          choices: Object.keys(colorPalette)
        }).then(answers => {
          if (answers.change === 'Exit') return 'Bye, bye!'
          return answers
        })
      case 'Exit':
        process.on('exit', () => {
          console.log(info('Bye, bye!'))
        })
    }
  }
}
