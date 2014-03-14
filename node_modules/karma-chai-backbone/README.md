karma-chai-backbone
===================

A karma plugin adapter for matthijsgroen's chai-backbone

Requirements
------------

This plugin requires Karma `~0.10` and the karma-sinon-chai plugin `~0.1`.

Installation
------------

Install as npm module

```sh
$ npm install karma-sinon-chai karma-chai-backbone --save-dev
```

Add `sinon-chai` and `chai-backbone` to the `frameworks` in your Karma configuration (order is important):

```js
module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai', 'chai-backbone'],
  });
}
```

Usage
-----

See [chai-backbone](https://github.com/matthijsgroen/chai-backbone) for more information on the chai-backbone extension.
