// steck
// Algoritm minor or equals in right on value are some
// Algoritm minor in left are substract 
 
var should = require('should'),
    Roman = require('../src/RomanInArabic');

 
 describe('Convert Numbers Romans in Arabic', function() {
 
     describe('single Symbol', function(){

	it('Convert Symbol I in 1', function(){
	   Roman.convert('I').should.equal(1);
	});

	it('Convert Symbol V in 5', function(){
	    Roman.convert('V').should.equal(5);	    
	});

     });

    describe('double Symbol', function(){
	
	it('Convert Symbol II in 2', function(){
	    Roman.convert('II').should.equal(2);
	});

	it('Convert Symbol XX in 20', function(){
	    Roman.convert('XX').should.equal(20);
	});
    });
    
    describe('two symbols duplicate', function(){
	
	it('Convert Symbol XXII in 22', function(){
	    Roman.convert('XXII').should.equal(22);
	});
    });

    describe('Symbol different', function(){

	it('Convert Symbol IX in 9', function(){
	    Roman.convert('IX').should.equal(9);
	});
    });
});
