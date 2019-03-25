#!/usr/bin/env node

const path = require('./path')
const config = require('./config')
const inquirer = require('inquirer')
const questions = require('./questions')
const chalk = require('chalk')

const ui = new inquirer.ui.BottomBar()
ui.log.write(`${chalk.bold('collo™ • test colors in your console')}`)

questions
