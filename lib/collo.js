const config = require('./config')
const defaultColors = require('./colorPalette')
const methods = require('./methods')

const collo = {
  config: config
}

Object.assign(collo, methods)

Object.defineProperties(collo, {
  // easily return path
  path: {
    get () {
      return this.config.path
    }
  },
  
  // assign default color palette if colors doesn't exist or print colors from palette
  colors: {
    get () {
      if(!this.config.get('colors')) {
        this.config.set('colors', defaultColors)
      }
      return this.config.get('colors')
    }
  }
})

module.exports = collo
