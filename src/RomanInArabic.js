function Romans() {}

Romans.convert  = function(number){    
    switch (number) {
	case 'I':
	    return 1;    
	case 'V':
	    return 5;
	default:
	    return 0;
    }
 }

 exports.Romans = Romans;
