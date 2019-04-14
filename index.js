#!/usr/bin/env node

const inquirer = require('inquirer')
const chalk = require('chalk')
const questions = require('./questions')
const defaultColors = require('./colorPalette')
const clear = require('clear')
const collo = require('./collo')
const textGen = require('./text-gen')

const checkWhatsNext = () => {
  inquirer.prompt(questions.sixth).then(answers => {
    if (answers.next === true) start(questions)
  })
}

clear()
console.log(`${chalk.bold('\ncollo™ • test colors in your console\n')}`)
const start = questions => {
  inquirer.prompt(questions.first)
    .then(answers => {
      if (answers.menu === 'See list of colors') {
        console.table(Object.entries(collo.colors))
        checkWhatsNext()
      } else if (answers.menu === 'See color in sentence') {
        inquirer.prompt(questions.second).then(answers => {
          const test = answers.testColor
          const val = collo.colors[ test ]
          console.log('\n' + chalk.hex(val)(textGen.sentence) + '\n')
          checkWhatsNext()
        })
      } else if (answers.menu === 'Edit existing list of colors') {
        inquirer.prompt(questions.third).then((answers) => {
          const toChange = answers.changeColor
          inquirer.prompt(questions.fourth).then(answers => {
            const newVal = answers.format
            collo.editColor = [ toChange, newVal ]
            console.log(`Color changed: ${toChange} to ${newVal}`)
            checkWhatsNext()
          })
        })
      } else if (answers.menu === 'Set default color palette') {
        inquirer.prompt(questions.fifth).then(answers => {
          if (answers.setDefaults === true) collo.config.set('colors', defaultColors)
          console.log('Colors were set from default color palette.')
          checkWhatsNext()
        })
      } else {
        process.on('exit', () => {
          console.log('\nPath to your configuration: ' + collo.path)
          console.log(chalk.bold.blue('\nBye, bye!\n'))
        })
      }
    })
}

start(questions)
