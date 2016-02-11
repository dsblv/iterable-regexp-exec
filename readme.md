# iterable-regexp-exec [![Build Status](https://travis-ci.org/dsblv/iterable-regexp-exec.svg?branch=master)](https://travis-ci.org/dsblv/iterable-regexp-exec)

> [Iterable interface] for RegExp.prototype.exec()

Compatible with multiple other ES2015 features (e.g. `spread operator`, `Array.from()`, `for..of`).

[Iterable interface]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable

## Install

```
$ npm install --save iterable-regexp-exec
```


## Usage

```js
const iterableRegexpExec = require('iterable-regexp-exec');

const res = iterableRegexpExec(/[unicorns]/g, 'rainbows');

[...res].map(match => match[0]);
//=> ['r', 'i', 'n', 'o', 's']
```


## API

### iterableRegexpExec(regexp, string)

Yields [`regexp.exec(string)`] once per iteration.

[`regexp.exec(string)`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

#### regexp

Type: `regexp`


#### string

Type: `boolean`


## License

MIT © [Dmitriy Sobolev](http://github.com/dsblv)
