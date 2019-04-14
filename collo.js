const config = require('./config')
const defaultColors = require('./colorPalette')
const chalk = require('chalk')

const collo = {
  config: config
}

if (!collo.config.get('colors')) {
  collo.config.set('colors', defaultColors)
}

Object.defineProperties(collo, {
  // easily return path
  path: {
    get () {
      return this.config.path
    }
  },

  colors: {
    get () {
      return this.config.get('colors')
    }
  },

  // set new color as an Array or overwrite existing ones
  add: {
    set (color) {
      if (color.length !== 2) throw new Error(`Array should contain exactly two items: key and value. ${chalk.bold.red('Example')}: ['black', '#000000']`)

      const [ key, value ] = color
      if (this.config.get(`colors.${key}`)) throw new Error(`This color already exists. If you want to overwrite it use ${chalk.bold.red('edit')}`)

      const regex = /^\#[0-9a-zA-Z]{6}/
      if (!regex.test(value)) throw new Error(`Value have to be in HEX format. ${chalk.bold.red('Example')}: #000000`)

      this.config.set(`colors.${key}`, value)
      console.log(`Added color ${chalk.bold(key)} with value: ${chalk.bold(value)}`)
    }
  },

  edit: {
    set (color) {
      if (color.length !== 2) throw new Error(`Array should contain exactly two items: key and value. ${chalk.bold.red('Example')}: ['black', '#000000']`)

      const [ key, value ] = color
      if (!this.colors[ key ]) throw new Error(`This color doesn't exist. If you want to add new collor use ${chalk.bold('add')}`)

      const regex = /^\#[0-9a-zA-Z]{6}/
      if (!regex.test(value)) throw new Error(`Value have to be in HEX format. ${chalk.bold.red('Example')}: #000000`)

      this.config.set(`colors.${key}`, value)
      console.log(`New value for ${chalk.bold(key)} is: ${chalk.bold(value)}`)
    }
  },

  delete: {
    set (color) {
      if (!this.colors[ color ])
        throw new Error(`This color doesn't exist. Use ${chalk.underline('collo.colors')} and try again using name or index of appropriate color.`)
      this.config.delete(`colors.${color}`)
      console.log(chalk.underline(`${color.toUpperCase()} was deleted.`))
    }
  }
})

module.exports = collo
