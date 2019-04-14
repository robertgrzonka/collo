const Conf = require('conf')
const pkg = require('./package.json')
const config = new Conf()

config.set('name', pkg.name)

module.exports = config
