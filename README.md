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
var rr = roundround([1,2,3]);

// Then call the result to get the next element in the array
rr(); // => 1
rr(); // => 2
rr(); // => 3

// When reaching the end of the internal array, the iterator starts over from
// the beginning
rr(); // => 1

// You can also specify an index from where RoundRound should start
var rr = roundround([1,2,3], 1);
rr(); // => 2
```

## License

MIT
