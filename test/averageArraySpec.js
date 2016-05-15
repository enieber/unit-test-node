const Should = require('should');
const averageArray = require('../src/averageArray');

describe('Average of arrays', function() {

  it('return 2 of array [ 1,2,3]', function() {
    averageArray([1,2,3]).should.equal(2);
  });

  it('return 4 of array [4,4,4,4,4]',function() {
    averageArray([4,4,4,4,4]).should.equal(4);
  });
});
