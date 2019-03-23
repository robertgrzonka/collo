#!/usr/bin/env node

const path = require('./path')
const config = require('./config')
const Inquirer = require('inquirer')
const questions = require('./questions')
const chalk = require('chalk')
// const generator = require('./text-gen')

const ui = new Inquirer.ui.BottomBar()
ui.log.write(`${chalk.bold('collo™ • test colors in your console')}`)

Inquirer
  .prompt(questions)
  .then(answers => {
    // console.log(JSON.stringify(answers, null, ' '))
    let obj = Object.values(answers)
    obj.map(value => {
      const color = Object.values(value)
      console.log(chalk.hex(color)(JSON.stringify(color)))
    })
  })
