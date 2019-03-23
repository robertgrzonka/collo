const Conf = require('conf')
const pkg = require('./package.json')

const config = new Conf()
config.store = {
  name: pkg.name,
  private: true,
  color: null
}

module.exports = config
