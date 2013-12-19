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
var RoundRound = require('roundround');

// Initialize RoundRound with any Array (null or undefined are ok as well, so no
// guards necessary)
var rr = new RoundRound([1,2,3]);

// Then call `.next()` to get the next element in the array
rr.next(); // => 1
rr.next(); // => 2
rr.next(); // => 3

// When reaching the end of the internal array, the iterator starts over from
// the beginning
rr.next(); // => 1
```

## License

MIT
