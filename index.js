#!/usr/bin/env node

const paths = require('./path')
const config = require('./config')
const inquirer = require('inquirer')
const chalk = require('chalk')
const questions = require('./questions/all')

console.log(`${chalk.bold('collo™ • test colors in your console')}`)
const start = questions => {
  inquirer.prompt(questions.first)
    .then(answers => {
      console.log(answers.options)
      console.log(`
      Your path: ${paths.config}
      Your config: ${config.store}
      `)
    })
}

start(questions)
