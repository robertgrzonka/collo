# **collo** [![Build Status](https://travis-ci.com/robertgrzonka/collo.svg?branch=master)](https://travis-ci.com/robertgrzonka/collo) 

> Create palette of your resuable colors, test how they look in console and reuse them later.

## Table of Contents
* [collo](#collo-build-status)
  * [Table of Contents](#table-of-contents)
  * [Install](#install)
  * [Usage](#usage)
  * [API](#api)
    * [`collo.path`](#collopath)
    * [`collo.colors`](#collocolors)
    * [`collo.edit`](#colloedit)
    * [`collo.add`](#colloadd)
    * [`collo.delete`](#collodelete)
  * [Contribution](#contribution)
    * [Development](#development)
  * [TODO](#todo)
  * [License](#license)

## Install

Install `collo` as a global dependency to use it from every directory in your console.

```shell
yarn global add collo-cli
```

## Usage

`collo` is CLI tool to store, test and modify your color palette. Easy way to keep all of used by you colors in one place, to edit them easily or just to always have nice default palette near you. `collo` tries to be as handy and easy as possible.

After installation you can run pre-installed binaries as simple command `collo-cli`.

## API

Nevertheless, `collo` is not only a CLI tool—it gots a few built-in `methods` to allow you work with it in your projects.

### `collo.path`

Path to your color palette. `collo` uses [conf](https://github.com/sindresorhus/conf) under the hood to store data; `collo.path` is just a shortcut for `collo.config.path`.

### `collo.colors`

Lists name—value pairs from `collo.config.get('colors')`. `collo` uses Node's `console.table()` to print them in a table. 
If there's no color palette—`collo` will set defaults from `./colorPalette`:

```javascript
const colorPalette = {
  black: '#010101',
  white: '#FEFEFE',
  gray: '#778899',
  silver: '#DDDDDD',
  gold: '#FFDC00',
  red: '#DC143C',
  turquoise: '#00CED1',
  teal: '#008080',
  green: '#3CB371',
  blue: '#4169E1',
  pink: '#FFB6C1'
}
```

### `collo.edit`

Edit color which already exists in palette. 
New value has to be in HEX format and match `RegEx` pattern `/^\#[0-9a-zA-Z]{6}/` (hash sign `#` followed by six characters from 0-9 and a-zA-Z).

```javascript
collo.edit = [ 'pink', '#FFC6C1' ]
```

### `collo.add`

Add new color to palette. 
New value has to be in HEX format and match `RegEx` pattern `/^\#[0-9a-zA-Z]{6}/` (hash sign `#` followed by six characters from 0-9 and a-zA-Z).

```javascript
collo.add = [ 'react', '#00d8ff' ]
```

### `collo.delete`

Delete color from palette.
Accepts only `string` matching one of the names in existing palette.

```javascript
collo.delete('colors.pink')
```

## Contribution

If you have any ideas and will to work with me in this project—you are kindly welcomed!

### Development 

In your default destination clone repository and install dependencies. Next you should get to know our [API](#api).

```shell
git clone https://github.com/robertgrzonka/collo.git
cd collo
yarn
```

## TODO

- [ ] TypeScript definitions
- [x] Jest tests
- [x] binaries

## License

MIT © [robertgrzonka](mailto:robert@theguys.sh)
