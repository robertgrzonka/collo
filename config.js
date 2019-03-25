const Conf = require('conf')
const pkg = require('./package.json')
const colorPalette = require('./colorPalette.js')

const config = new Conf()
config.store = {
  name: pkg.name,
  private: true,
  colors: Object.entries(colorPalette)
}

module.exports = config
