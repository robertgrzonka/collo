# **collo** [![Build Status](https://travis-ci.com/robertgrzonka/collo.svg?branch=master)](https://travis-ci.com/robertgrzonka/collo) 

> Create list of your colors, test with CLI and reuse it!

## Table of Contents
* [collo](#collo-build-status)
  * [Table of Contents](#table-of-contents)
  * [Overview](#overview)
  * [Usage](#usage)
  * [API](#api)
    * [`collo.path`](#collopath)
    * [`collo.colors`](#collocolors)
    * [`collo.editColor`](#colloeditcolor)
    * [`collo.addColor`](#colloaddcolor)
  * [Contribution](#contribution)
  * [TODO](#todo)
  * [License](#license)

## Overview

`collo` is CLI tool to store and test your color palette. Easy way to keep all of used by your colors in one place, to edit them easily or just to always have nice default palette near you.

## Usage

Instal `collo` as a global dependency to use it from every direction in your console and run binaries as `collo-cli` to start.

```shell
yarn global add collo-cli
collo-cli
```

## API

### `collo.path`

Path to your color palette. `collo` uses [conf](https://github.com/sindresorhus/conf) under the hood to store your data, `collo.path` is just a shortcut for `collo.config.path`.

### `collo.colors`

Lists your color palette in a table from `collo.config.get('colors')`. It uses Node's `console.table()` to print them in a table. 
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

Edit existing in palette color. 
New value has to be in HEX format and match `RegEx` pattern `/^\#[0-9a-zA-Z]{6}/` (hash sign `#` followed by six characters from 0-9 and a-zA-Z i.e. `#000000`).

```javascript
collo.edit = [ 'pink', '#FFC6C1' ]
```

### `collo.add`

Add new color to palette. 
New value has to be in HEX format and match `RegEx` pattern `/^\#[0-9a-zA-Z]{6}/` (hash sign `#` followed by six characters from 0-9 and a-zA-Z i.e. `#000000`).

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
In your default destination clone repository and install dependencies. Next check [API](#api).

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

MIT © [robertgrzonka](https://robert.theguys.sh)
