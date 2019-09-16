'use strict';

var squareRoot = function(a) { //x1
    let x1 = 0;
    let x2 = 0;
    let x3 = a / 2;



while (Math.abs((x1 - x2) >= 0.0001) || Math.abs((x2 - x3) >= 0.0001) ) {
    x1 = x2;
    x2 = x3;
    x3 = ((x2 + a/x2) /2);
    }
    return x3;
};

//var a = Number(prompt('What is the square root of'));
console.log(squareRoot(9));