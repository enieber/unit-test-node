const should = require('should');
const averageAbsDev = require('../src/averageAbsDev');

describe('Average Absolute Deviatioation Spec', function() {
  
  it('return 1 where onde array [1,2,3,4]', function() {
    averageAbsDev([1,2,3,4]).should.equal(1);
  });
 });
