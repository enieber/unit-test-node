'use strict';

module.exports = function sumArray(arr){
  return arr.reduce(function(a, b){
    return a + b; 
  });
};
