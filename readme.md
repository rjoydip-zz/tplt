# tplt

[![Build Status](https://travis-ci.org/rjoydip/tplt.svg?branch=master)](https://travis-ci.org/rjoydip/tplt)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

> Template Literals & Tag Function.


## Install

```
$ npm install https://github.com/rjoydip/tplt.git
```


## Usage

```js
const name = 'john';
log(tplt`Hi ${name} and age ${25}`);
log(tplt`Simple`);
```


## API

### tplt(input)

#### input

Type: `string`

## CLI

```
$ npm install --global tplt
```

```
$ tplt --help

  Usage
    tplt [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ tplt
    unicorns & rainbows
    $ tplt ponies
    ponies & rainbows
```


## License

MIT © [Joydip Roy](https://github.com/rjoydip)
