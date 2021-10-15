const chalk = require("chalk");
const inquirer = require("inquirer");
const separator = new inquirer.Separator("———");
const collo = require("./collo");

const prompt = chalk.hex("#facf5a");
const warning = chalk.hex("#ff5959");

module.exports = {
  menu: {
    type: "list",
    name: "menu",
    message: prompt("What would you like to do? 🤔 "),
    choices: [
      "Add new color",
      "Delete color",
      "Edit value of existing color",
      "See list of colors",
      "See color in sentence",
      separator,
      "Set default color palette",
      "Show path to configuration file",
      "Export SCSS file for color palette",
      separator,
      chalk.bold.hex("#facf5a")("Exit"),
    ],
  },

  palette: {
    type: "list",
    message: prompt("Choose color for tests:"),
    name: "testColor",
    choices: Object.keys(collo.colors),
  },

  editColor: {
    type: "list",
    message: prompt("Which value would you like to change:"),
    name: "changeColor",
    choices: Object.keys(collo.colors),
  },

  editColorHex: {
    type: "input",
    message: prompt("Write new value in HEX format:"),
    name: "format",
    validate: (value) => {
      const regex = /^\#[0-9a-zA-Z]{6}/;
      if (!regex.test(value)) {
        warning("Value has to be in HEX format. Example: #000000");
      } else {
        return true;
      }
    },
  },

  setDefault: {
    type: "confirm",
    name: "setDefaults",
    message: warning(
      "Are you sure you want get back to default color palette?"
    ),
    default: false,
  },

  letsGo: {
    type: "confirm",
    name: "next",
    message: prompt("Would you like to do something else?"),
    default: false,
  },

  addColorName: {
    type: "input",
    name: "newColorName",
    message: prompt("Name for new color:"),
    validate: (value) => {
      if (value.length < 3) {
        return warning("Name of color needs to had at least three characters.");
      } else {
        return true;
      }
    },
  },

  addColorHex: {
    type: "input",
    name: "newColorHex",
    message: prompt("HEX value for new color:"),
    validate: (value) => {
      const regex = /^\#[0-9a-zA-Z]{6}/;
      if (!regex.test(value)) {
        return warning("Value has to be in HEX format. Example: #000000");
      } else {
        return true;
      }
    },
  },

  deleteColor: {
    type: "list",
    message: prompt("Choose color to delete:"),
    name: "deleteColor",
    choices: Object.keys(collo.colors),
  },

  confirmDeleteColor: {
    type: "confirm",
    message: warning("Are you sure you want to delete this color?"),
    name: "confirmDelete",
    default: false,
  },
};
