'use strict';

var assert = require('assert');
var roundround = require('./index');
var rr;

var rr = roundround([1,2,3]);
assert(rr() === 1, 'First call should return the first element');
assert(rr() === 2, 'Second call should return the second element');
assert(rr() === 3, 'Third call should return the third element');
assert(rr() === 1, 'Fourth call should return the first element');

var rr = roundround([1,2,3], 1);
assert(rr() === 2, 'Give an optinal start-index, and the first call should return that element');

var empty = roundround();
assert(empty() === undefined, 'An empty RoundRound instance should just return undefined');

var undef = roundround(undefined);
assert(undef() === undefined, 'A instance initialized with `undefined` should just return undefined');

var nil = roundround(null);
assert(nil() === undefined, 'A instance initialized with `null` should just return undefined');

var nonArray = function () { roundround({}); };
assert.throws(nonArray, 'Trying to initialize RoundRound with a non-array should throw an Error');
