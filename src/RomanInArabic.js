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
	let letsRightNumber = 0;

	for(let i = number.length -1; i >= 0; i--){

	    let present = numberRomans[number.charAt(i)];
	    let multiplay = 1;

	    if(present < letsRightNumber) multiplay = -1;


	    accummulator += numberRomans[number.charAt(i)] * multiplay;

	    letsRightNumber = present;
	}
	
	return accummulator;
    }
     
    exp.convert = convert || {};

})(exports);
