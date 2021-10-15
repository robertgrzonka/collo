#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const clear = require("clear");
const questions = require("./lib/questions");
const defaultColors = require("./lib/colorPalette");
const collo = require("./lib/collo");
const textGen = require("./lib/text-gen");

const fs = require("fs");
const os = require("os");

const checkWhatsNext = () =>
  inquirer
    .prompt(questions.letsGo)
    .then((answers) => !answers.next || start(questions));

clear();
console.log(
  chalk.bold.hex("#facf5a")(`
‣ collo™ • test colors in your console
`)
);

const start = (questions) => {
  inquirer
    .prompt(questions.menu)
    .then((answers) => {
      switch (answers.menu) {
        case "See list of colors":
          const colors = Object.entries(collo.config.get("colors"));
          const table = colors.map((color) => {
            const [name, value] = color;
            return { name, value };
          });
          console.table(table);
          checkWhatsNext();
          break;
        case "See color in sentence":
          inquirer.prompt(questions.palette).then((answers) => {
            const value = collo.colors[answers.testColor];
            console.log(chalk.hex(value)(textGen.sentence));
            checkWhatsNext();
          });
          break;
        case "Edit value of existing color":
          inquirer.prompt(questions.editColorHex).then((answers) => {
            const toChange = answers.changeColor;
            inquirer.prompt(questions.editColorHex).then((answers) => {
              const newValue = answers.format;
              collo.config.set(`colors.${toChange}`, newValue);
              console.log(`Color changed: ${toChange} to ${newValue}`);
              checkWhatsNext();
            });
          });
          break;
        case "Add new color":
          inquirer
            .prompt([questions.addColorName, questions.addColorHex])
            .then((answers) => {
              const name = answers.newColorName;
              const value = answers.newColorHex;
              collo.config.set(`colors.${name}`, value);
              console.log(
                `Added color: ${name} with value ${chalk.hex(value)(value)}`
              );
              checkWhatsNext();
            });
          break;
        case "Delete color":
          inquirer
            .prompt([questions.deleteColor, questions.confirmDeleteColor])
            .then((answers) => {
              if (answers.confirmDelete) {
                collo.config.delete(`colors.${answers.deleteColor}`);
                console.log(
                  `Deleted color: ${chalk.bold(answers.deleteColor)}.`
                );
              }
              checkWhatsNext();
            });
          break;
        case "Set default color palette":
          inquirer.prompt(questions.setDefault).then((answers) => {
            if (answers.setDefaults) {
              collo.config.set("colors", defaultColors);
              console.log("Colors were set from default color palette.");
            }
            checkWhatsNext();
          });
          break;
        case "Show path to configuration file":
          console.log(
            chalk.bold.hex("#facf5a")("\nPath: \n") + collo.path + "\n"
          );
          checkWhatsNext();
          break;
        case "Export SCSS file for color palette":
          const colorsToExport = Object.entries(collo.config.get("colors"));
          const file = fs.createWriteStream(
            os.homedir() + "/Downloads/color-palette.scss"
          );
          file.write("/* Color palette */\n");
          colorsToExport.forEach((color) => {
            const [key, value] = color;
            file.write(
              `$${key}: ${value}; .text-${key} {color: $${key}} .bg-${key} {background-color: $${key}}`
            );
          });
          file.end("/* End */");
          console.log(
            `\nPath to scss file: \n${os.homedir()}/Downloads/color-palette.scss\n`
          );
          checkWhatsNext();
          break;
        default:
          process.on("exit", () => {
            console.log(
              chalk.bold.hex("#facf5a")("\n‣ Path to your configuration: \n") +
                collo.path
            );
            console.log(
              chalk.bold.hex("#facf5a")`\n👋 See you around & bye, bye!\n`
            );
          });
      }
    })
    .catch((error) => console.error(error));
};

start(questions);
