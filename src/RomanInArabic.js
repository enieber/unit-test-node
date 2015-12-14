(function(exp) {
    'use strict';
    
    var numberRomans = {};
    numberRomans['I'] = 1;
    numberRomans['V'] = 5;
    numberRomans['X'] = 10;
    numberRomans['L'] = 50;
    numberRomans['C'] = 100;
    numberRomans['D'] = 500;
    numberRomans['M'] = 1000;

    function convert(number){    
	let chars = number.split("");
	let accummulator = 0;

	for(let i = 0; i < number.length; i++){
	    accummulator += numberRomans[number.charAt(i)]; 	
	}
	return accummulator;

    }
      
    exp.convert = convert || {};

})(exports);
