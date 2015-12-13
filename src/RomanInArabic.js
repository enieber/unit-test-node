function Romans() {}

Romans.convert  = function(number){    
    if(number === 'I')
	return 1;    
    if(number === 'V')
	return 5;
    else 
	return 0;
 }

 exports.Romans = Romans;
