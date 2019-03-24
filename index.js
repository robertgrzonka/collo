#!/usr/bin/env node

const path = require('./path')
const config = require('./config')
const Inquirer = require('inquirer')
const questions = require('./questions')
const chalk = require('chalk')
const generator = require('./text-gen')

const ui = new Inquirer.ui.BottomBar()
ui.log.write(`${chalk.bold('collo™ • test colors in your console')}`)

Inquirer
  .prompt(questions)
  .then(answers => {
    for (let colors of Object.values(answers)) {
      colors.forEach(color =>
        console.log(chalk`{${color[ 0 ]} • ${color[ 0 ]}: ${color[ 1 ]}}`))
    }
  })
