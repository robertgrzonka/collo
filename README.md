# **collo** [![Build Status](https://travis-ci.com/robertgrzonka/collo.svg?branch=master)](https://travis-ci.com/robertgrzonka/collo) [![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> Create palette of your resuable colors, test how they look in console and reuse them later.

## Table of Contents
1. [**collo** ![Build Status](https://travis-ci.com/robertgrzonka/collo) ![All Contributors](#contributors)](#collo-build-status-all-contributors)
   1. [Table of Contents](#table-of-contents)
   2. [Install](#install)
   3. [Usage](#usage)
   4. [API](#api)
      1. [`collo.path`](#collopath)
      2. [`collo.colors`](#collocolors)
      3. [`collo.edit(name, value`](#colloeditname-value)
      4. [`collo.add(name, value)`](#colloaddname-value)
      5. [`collo.delete`](#collodelete)
   5. [Contribution](#contribution)
      1. [Development](#development)
      2. [TODO](#todo)
   6. [Contributors](#contributors)
   7. [License](#license)

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

### `collo.edit(name, value`

Edit color which already exists in palette. 
Accepts `name` as a `string` and new value has to be in HEX format and match `RegEx` pattern `/^\#[0-9a-zA-Z]{6}/` (hash sign `#` followed by six characters from 0-9 and a-zA-Z).

```javascript
collo.edit('pink', '#FFC6C1')
```

### `collo.add(name, value)`

Add new color to palette. 
Accepts `name` as a `string` and new value has to be in HEX format and match `RegEx` pattern `/^\#[0-9a-zA-Z]{6}/` (hash sign `#` followed by six characters from 0-9 and a-zA-Z).

```javascript
collo.add('react', '#00d8ff')
```

### `collo.delete`

Delete color from palette.
Accepts only `string` matching one of the names in existing palette.

```javascript
collo.delete('pink')
```

## Contribution

If you have any ideas and will to work with me in this project—you are kindly welcome!

### Development 

In your default destination clone repository and install dependencies. Next you should get to know our [API](#api).

```shell
git clone https://github.com/robertgrzonka/collo.git
cd collo
yarn
```

### TODO

- [ ] TypeScript definitions
- [x] Jest tests
- [x] binaries

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://robert.theguys.sh"><img src="https://avatars0.githubusercontent.com/u/35585466?v=4" width="100px;" alt="robertgrzonka"/><br /><sub><b>robertgrzonka</b></sub></a><br /><a href="https://github.com/robertgrzonka/collo/commits?author=robertgrzonka" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [robertgrzonka](mailto:robert@theguys.sh)
