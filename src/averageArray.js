'use strict';
const sumArray = require('./sumArray');

module.exports = function averageArray(arr){
  let sum = sumArray(arr);
  return sum/arr.length;
}
