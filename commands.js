const args = require('args')

args
  .option('secret', 'Secret to encrypt | string', undefined, value => {
    if (typeof value === 'string') {
      return value
    } else {
      console.log('Value must be a string.')
    }
  })
  .option('overwrite', 'Overwrite specific key which already exists in your config. | boolean', false)
  
const flags = args.parse(process.argv, {
  name: 'collo',
  mainColor: [
    'red',
    'bold'
  ],
  value: 'Encrypt your passwords and tokens, save them and forget!'
})
