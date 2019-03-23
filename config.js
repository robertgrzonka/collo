const Conf = require('conf')
const pkg = require('./package.json')
const defaultColors = require('./colorPalette.js')

const config = new Conf()
config.store = {
  name: pkg.name,
  private: true,
  color: defaultColors
}

module.exports = config
