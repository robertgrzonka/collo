const config = require('./config')
const defaultColors = require('./colorPalette')
const chalk = require('chalk')

const collo = {
  config: config
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
      if (!collo.config.get('colors')) {
        collo.config.set('colors', defaultColors)
      }
      return this.config.get('colors')
    }
  },
})

module.exports = collo
