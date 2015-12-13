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

	if(typeof(numberRomans[number]) == 'undefined'){
	    let accummulator = 0; 
	    
	    for(let i = 0; i < numberRomans.legth; i++){
		accummulator += numerRomans[number.charAt(1)];
	    }
	    return accummulator;
	}
	return numberRomans[number];
    }
      
    exp.convert = convert || {};

})(exports);
