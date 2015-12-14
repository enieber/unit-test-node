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
        return  numberRomans[chars]; 	
    }
      
    exp.convert = convert || {};

})(exports);
