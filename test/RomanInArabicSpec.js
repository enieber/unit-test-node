// steck
// Algoritm minor or equals in right on value are some
// Algoritm minor in left are substract 
 
var should = require('should'),
    Roman = require('../src/RomanInArabic').Romans;

 
 describe('Convert Numbers Romans in Arabic', function() {
 
     describe('Convert Symbol unic', function(){

	it('Convert Symbol I in 1', function(){
	   Roman.convert('I').should.equal(1);
	});

	it('Convert Symbol V in 5', function(){
	    Roman.convert('V').should.equal(5);	    
	});

     });
});
