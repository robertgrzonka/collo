const Conf = require('conf')
const colors = require('./colorPalette')
const config = new Conf()

config.set('colors', colors)

module.exports = config
