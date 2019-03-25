#!/usr/bin/env node

const args = require('args')

args
  .option('color', 'Choose color | string', 'black', value => {
    if (typeof value === 'string') {
      return value
    } else {
      console.log('Value must be a string.')
    }
  })
  .option('overwrite', 'Overwrite color which already exists in your config. | boolean', false)
  .command('list', 'Print list of available colors', colors => colors)

const flags = args.parse(process.argv, {
  name: 'collo',
  mainColor: [
    'red',
    'bold'
  ],
  value: 'Something else.'
})

module.exports = flags
