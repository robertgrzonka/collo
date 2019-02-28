const Conf = require('conf')
const pkg = require('./package.json')

const config = new Conf()
config.store = { name: pkg.name, private: true, dev: true }

module.exports = config
