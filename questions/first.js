module.exports = {
  type: 'list',
  name: 'options',
  message: 'What would you like to do now?',
  choices: [
    'See list of colors',
    'See color in sentence',
    'Edit existing list of colors',
    new Inquirer.Separator(),
    'Exit'
  ],
  filter: value => {
    switch (value) {
      case 'See list of default colors':
        clear()
        return Object.keys(defaultColors)
      case 'See color in sentence':
        const checkColor = [ {
          type: 'list',
          message: 'Format:',
          name: 'format',
          choices: [ 'name', 'RGB', 'HEX' ],
          validate: value => {
            switch (value) {
              case 'name':
                clear()
                return value
              case 'RGB':
              case 'HEX':
                return 'Unsuported.'
            }
          }
        } ]
        return Inquirer.prompt(checkColor)
      case 'Edit existing list of colors':
        return 'Place for editing'
    }
  }
}
