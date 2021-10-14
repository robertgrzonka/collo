const config = require("./config");
const defaultColors = require("./colorPalette");
const methods = require("./methods");

const collo = {
  config,
  methods,
  colors: config.get("colors") ?? defaultColors,
};

Object.defineProperties(collo, {
  path: {
    get() {
      return this.config.path;
    },
  },
});

module.exports = collo;
