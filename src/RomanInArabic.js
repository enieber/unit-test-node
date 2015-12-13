(function(exp) {
    'use strict';

    function convert(number){    
	switch (number) {
	    case 'I':
		return 1;  
	   case 'II':
	     return 2;
	    case 'V':
		return 5;
	   case 'X':
		return 10;
	    case 'L':
		return 50;
	    case 'C':
		return 100;
	    case 'D':
		return 500;
	    case 'M':
		return 1000;
	    default:
		return 0;   

	}
    }
      
    exp.convert = convert || {};

})(exports);
