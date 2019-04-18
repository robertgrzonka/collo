#!/usr/bin/env node

const inquirer = require('inquirer')
const chalk = require('chalk')
const clear = require('clear')
const questions = require('./lib/questions')
const defaultColors = require('./lib/colorPalette')
const collo = require('./lib/collo')
const textGen = require('./lib/text-gen')

const checkWhatsNext = () => {
  inquirer.prompt(questions.sixth).then(answers => {
    if (answers.next === true) {
      start(questions)
    } else {
      return false
    }
  })
}

clear()
console.log(chalk.bold.hex('#facf5a')('\ncollo™ • test colors in your console\n'))
const start = questions => {
  inquirer.prompt(questions.first)
    .then(answers => {
      switch (answers.menu) {
        case 'See list of colors':
          console.table(Object.entries(collo.colors))
          checkWhatsNext()
          break
        case 'See color in sentence':
          inquirer
            .prompt(questions.second)
            .then(answers => {
              const test = answers.testColor
              const val = collo.colors[ test ]
              console.log('\n' + chalk.hex(val)(textGen.sentence) + '\n')
              checkWhatsNext()
            })
          break
        case 'Edit value of existing color':
          inquirer
            .prompt(questions.third)
            .then((answers) => {
              const toChange = answers.changeColor
              inquirer.prompt(questions.fourth).then(answers => {
                const newVal = answers.format
                collo.editColor = [ toChange, newVal ]
                console.log(`Color changed: ${toChange} to ${newVal}`)
                checkWhatsNext()
              })
            })
          break
        case 'Add new color':
          inquirer
            .prompt([ questions.seventh, questions.eight ])
            .then(answers => {
              const name = answers.newColorName
              const value = answers.newColorHex
              collo.addColor = [ name, value ]
              console.log(`Added color: ${name} with value ${chalk.hex(value)(value)}`)
              checkWhatsNext()
            })
          break
        case 'Delete color':
          inquirer
            .prompt([ questions.nineth, questions.ten ])
            .then(answers => {
              const toDelete = answers.deleteColor
              const confirmation = answers.confirmDelete
              if (confirmation) {
                collo.config.delete(`colors.${toDelete}`)
                console.log(`Deleted color: ${toDelete}.`)
                checkWhatsNext()
              } else {
                checkWhatsNext()
              }
            })
          break
        case 'Set default color palette':
          inquirer
            .prompt(questions.fifth)
            .then(answers => {
              if (answers.setDefaults === true) {
                collo.config.set('colors', defaultColors)
                console.log('Colors were set from default color palette.')
              }
              checkWhatsNext()
            })
          break
        case 'Show path to configuration file':
          console.log(chalk.bold.hex('#facf5a')('Path: ') + collo.path)
          checkWhatsNext()
          break
        default:
          process.on('exit', () => {
            console.log(chalk.bold.hex('#facf5a')('\nPath to your configuration: ') + collo.path)
            console.log(chalk.bold.hex('#facf5a')`See you around & bye, bye!\n`)
          })
      }
    })
}

start(questions)
