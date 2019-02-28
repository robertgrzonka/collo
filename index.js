#!/usr/bin/env node

// const path = require('./path')
const config = require('./config')
const inquirer = require('inquirer')
const questions = require('./cli')
const encrypt = require('./encrypt')

inquirer.prompt(questions).then(answers => {
  if (config.has(answers.key) === true) {
    throw new Error('Encrypt already exists. Delete it with `.delete()` or do something else')
  } else {
    config.set(answers.key, encrypt(answers.value))
  }
})
