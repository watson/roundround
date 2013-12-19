'use strict';

var RoundRound = function (array) {
  if (!(this instanceof RoundRound))
    return new RoundRound(array);
  if (array !== undefined && array !== null && !Array.isArray(array))
    throw new Error('Expecting argument to RoundRound to be an Array');
  this._array = array || [];
  this._index = 0;
};

RoundRound.prototype.next = function () {
  if (this._index >= this._array.length)
    this._index = 0;
  return this._array[this._index++];
};

module.exports = RoundRound;
