// steck
// Algoritm minor or equals in right on value are some
// Algoritm minor in left are substract 
 
var should = require('should'),
    Roman = require('../src/RomanInArabic');

 
 describe('Convert Numbers Romans in Arabic', function() {
 
     describe('Convert single Symbol', function(){

	it('Convert Symbol I in 1', function(){
	   Roman.convert('I').should.equal(1);
	});

	it('Convert Symbol V in 5', function(){
	    Roman.convert('V').should.equal(5);	    
	});

     });

    describe('Convert double Symbol', function(){
	
	it('Convert Symbol II in 2', function(){
	    Roman.convert('II').should.equal(2);
	});

	//it('Convert Symbol XX in 10', function(){
	  //  Roman.convert('XX').should.equal(10);
	//});
    });
});
