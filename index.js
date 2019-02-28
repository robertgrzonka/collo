const path = require('./path')
const config = require('./config')
const inquirer = require('inquirer')
const question = require('./cli')
const encrypt = require('./encrypt')

inquirer.prompt(question).then(answer => {
  
  const encWord = Object.values(answer).toString()
  
  if (config.has('encrypt')) {
    new Error('Encrypt already exists. Delete it with `.delete()` or do something else') 
  } else {    
    config.set('encrypt', encrypt(encWord))
  }
  console.log(`Your new token is: ${config.get('encrypt')}`)
  
})
