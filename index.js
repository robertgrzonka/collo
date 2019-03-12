#!/usr/bin/env node

const path = require('./path')
const config = require('./config')
const inquirer = require('inquirer')
const questions = require('./questions')
const encrypt = require('./encrypt')

inquirer.prompt(questions).then(answers => {
  if (config.has(answers.key)) {
    throw new Error('Encrypt already exists. Delete it with `.delete()` or do something else')
  } else {
    config.set(answers.key, encrypt(answers.value))
    console.log(`Saved in ${path.config}`)
  }
  return config
})

