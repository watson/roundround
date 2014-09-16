# RoundRound

A dead simple round-robin array iterator

[![build
status](https://secure.travis-ci.org/watson/roundround.png)](http://travis-ci.org/watson/roundround)

## Install

```
npm install roundround
```

## Usage

```javascript
var roundround = require('roundround');

// Initialize RoundRound with any Array (null or undefined are ok as well, so no
// guards necessary)
var next = roundround([1,2,3]);

// Then call the result to get the next element in the array
next(); // => 1
next(); // => 2
next(); // => 3

// When reaching the end of the internal array, the iterator starts over from
// the beginning
next(); // => 1

// You can also specify an index from where RoundRound should start
var next = roundround([1,2,3], 1);
next(); // => 2
```

## License

MIT
