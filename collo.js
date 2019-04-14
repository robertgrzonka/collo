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
  addColor: {
    set (color) {
      if (color.length !== 2) throw new Error(chalk`Array should contain exactly two items: key and value. {bold.red Example}: ['black', '#000000']`)

      const [ key, value ] = color
      if (this.config.get(`colors.${key}`)) throw new Error(chalk`This color already exists. If you want to overwrite it use {bold.red editColor}`)

      const regex = /^\#[0-9a-zA-Z]{6}/
      if (!regex.test(value)) throw new Error(chalk`Value have to be in HEX format. {bold.red Example}: #000000`)

      this.config.set(`colors.${key}`, value)
      return this.config.get(`colors.${key}`)
    }
  },

  editColor: {
    set (color) {
      const [ key, value ] = color
      if (!this.colors[ key ]) throw new Error(chalk`This color doesn't exist. If you want to add new collor use {bold addColor}`)

      const regex = /^\#[0-9a-zA-Z]{6}/
      if (!regex.test(value)) throw new Error(chalk`Value have to be in HEX format. {bold.red Example}: #000000`)

      this.config.set(`colors.${key}`, value)
      return this.config.get(`colors.${key}`)
    }
  }
})

module.exports = collo
