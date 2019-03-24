#!/usr/bin/env node

const args = require('args')
<<<<<<< HEAD
const colors = [ 'black', 'white', 'red', 'green', 'blue', 'yellow' ]
=======
const colors = ['black', 'white', 'red', 'green', 'blue', 'yellow']
>>>>>>> cf34471d4dd68d05cb9d72614ae40cbd1a86bbf7

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
<<<<<<< HEAD

=======
  
>>>>>>> cf34471d4dd68d05cb9d72614ae40cbd1a86bbf7
const flags = args.parse(process.argv, {
  name: 'collo',
  mainColor: [
    'red',
    'bold'
  ],
  value: 'Something else.'
})

module.exports = flags
