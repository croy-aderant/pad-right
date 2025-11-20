const { expect } = require('chai');
const padRight = require('../index');

describe('padRight', function() {
  it('should pad a string to the right with spaces', function() {
    expect(padRight('hello', 10)).to.equal('hello     ');
  });

  it('should return the original string if already at desired length', function() {
    expect(padRight('hello', 5)).to.equal('hello');
  });

  it('should return the original string if longer than desired length', function() {
    expect(padRight('hello world', 5)).to.equal('hello world');
  });

  it('should handle empty strings', function() {
    expect(padRight('', 5)).to.equal('     ');
  });

  it('should handle zero padding', function() {
    expect(padRight('hello', 0)).to.equal('hello');
  });

  it('should convert non-string inputs to strings', function() {
    expect(padRight(123, 6)).to.equal('123   ');
  });

  it('should throw error for invalid length', function() {
    expect(() => padRight('hello', -1)).to.throw(TypeError);
    expect(() => padRight('hello', 'invalid')).to.throw(TypeError);
  });
});
