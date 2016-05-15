const Should = require('should');
const sumArray = require('../src/sumArray');

describe('sum of arrays', function() {

  it('return 6 of array [ 0,1,2,3]', function() {
    sumArray([0,1,2,3]).should.equal(6);
  });

  it('return -6 of array [0, -1, -2, -3]', function() {
    sumArray([0,-1,-2,-3]).should.equal(-6);
  });
});
