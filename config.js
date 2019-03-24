const Conf = require('conf')
const pkg = require('./package.json')
const defaultColors = require('./colorPalette.js')

const config = new Conf()
config.store = {
  name: pkg.name,
  private: true,
<<<<<<< HEAD
  color: defaultColors
=======
  color: null
>>>>>>> cf34471d4dd68d05cb9d72614ae40cbd1a86bbf7
}

module.exports = config
