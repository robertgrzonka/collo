#!/usr/bin/env node

const path = require('./path')
const config = require('./config')
const inquirer = require('inquirer')
const questions = require('./questions')
const generator = require('./text-gen')
const chalk = require('chalk')

inquirer.prompt(questions).then(answers => {
  if (config.get('color', null) === answers.color) {
    throw new Error('You are trying to save color which has been apended earlier.\nChange color or do something else.')
  } else {
    config.set('color', answers.color)
    console.log(`Saved in ${chalk.blue(path.config)}`)
  }
  return config
})

