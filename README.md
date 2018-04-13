# sheetify-check

check css syntax with sheetify

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/sheetify-check.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/sheetify-check
[travis-image]: https://img.shields.io/travis/goto-bus-stop/sheetify-check.svg?style=flat-square
[travis-url]: https://travis-ci.org/goto-bus-stop/sheetify-check
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install sheetify-check
```

## Usage

Configured via package.json:

```js
{
  "sheetify": {
    "transform": [
      "sheetify-check"
    ]
  }
}
```

Configured via the Browserify API:

```js
b.transform(sheetify, {
  transform: ['sheetify-check']
})
```

## License

[Apache-2.0](LICENSE.md)
