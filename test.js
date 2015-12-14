var assert = require('assert');
var should = require('chai').should();
var Byte = require('./byte');

describe('byteJS', function() {
  var instruction;
  beforeEach(function() {
    instruction = new Byte(4, 12);
  });

  it('should have the correct prototype', function() {
    assert.equal(instruction instanceof Byte, true);
  });

  it('should fail with integers larger than 32 bits', function() {
    assert.throws(function() {
      new Byte(64);
    }, Error);
  });

  it('should fail with more arguments than fields', function() {
    assert.throws(function() {
      instruction.pack(5,12,6);
    }, Error);
  });

  it('should return a number', function() {
    var packed = instruction.pack(5,12);
    assert.equal(typeof packed, 'number');
  });
});