'use strict';
const averageArray = require('./averageArray');

function averageAbsDev(arr){
  let absDev = arr.map(function(x) {
    return Math.abs(x - averageArray(arr));
  });
  
  console.log(absDev);
  return averageArray(absDev);
};

module.exports = averageAbsDev;

