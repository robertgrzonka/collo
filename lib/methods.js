const chalk = require('chalk')

module.exports = {
  add (name, value) {
    if(this.colors) {
      if(this.config.get(`colors.${name}`)) {
        throw new Error(`This color already exists. If you want to overwrite it use ${chalk.bold.red('collo.edit()')}`)
      }
      const regex = /^\#[0-9a-zA-Z]{6}/
      if(!regex.test(value)) {
        throw new Error(`Value have to be in HEX format. ${chalk.bold.red('Example')}: #000000`)
      }
      this.config.set(`colors.${name}`, value)
      console.log(`Added ${chalk.bold(name)} color with ${chalk.bold(value)} value`)
    }
  },
  
  edit (name, value) {
    if(this.colors) {
      if(!this.config.get(`colors.${name}`)) {
        throw new Error(`This color doesn't exist. If you want to add new collor use ${chalk.bold('collo.add()')}`)
      }
      const regex = /^\#[0-9a-zA-Z]{6}/
      if(!regex.test(value)) {
        throw new Error(`Value have to be in HEX format. ${chalk.bold.red('Example')}: #000000`)
      }
      this.config.set(`colors.${name}`, value)
      console.log(`New value for ${chalk.bold(name)} is: ${chalk.bold(value)}`)
    }
  },
  
  delete (name) {
    if(!this.colors[ name ]) {
      throw new Error(`This color doesn't exist. Use ${chalk('collo.colors')} and try again using name or index of appropriate color.`)
    }
    this.config.delete(`colors.${name}`)
    console.log(`${name.toUpperCase()} was deleted.`)
  }
}
