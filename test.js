'use strict';

var assert = require('assert');
var RoundRound = require('./index');

var instance = new RoundRound([1,2,3]);
assert(instance.next() === 1, 'First call should return the first element');
assert(instance.next() === 2, 'Second call should return the second element');
assert(instance.next() === 3, 'Third call should return the third element');
assert(instance.next() === 1, 'Fourth call should return the first element');

assert(RoundRound() instanceof RoundRound, 'Forgetting the new keyword should not be a problem');

var empty = new RoundRound();
assert(empty.next() === undefined, 'An empty RoundRound instance should just return undefined');

var undef = new RoundRound(undefined);
assert(undef.next() === undefined, 'A instance initialized with `undefined` should just return undefined');

var nil = new RoundRound(null);
assert(nil.next() === undefined, 'A instance initialized with `null` should just return undefined');

var nonArray = function () { new RoundRound({}); };
assert.throws(nonArray, 'Trying to initialize RoundRound with a non-array should throw an Error');
