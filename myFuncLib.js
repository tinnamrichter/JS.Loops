'use strict';

// JS.Loops.0
var n = Number(prompt('write a number'));

var fact = function(n) {
    if (n <= 1)
    return 1;
else {
    return n * fact(n - 1);
    }
}

console.log(fact(n));

// JS.Loops.1
var n = Number(prompt('write a number'));

var fibo = function(n) {
    if (n === 0 || n === 1)
        return n;
    else {
        return fibo(n - 1) + fibo(n - 2);
    } 
}

console.log(fibo(n));

// JS.Loops.3
var r = Number(prompt('Indtast roden'));
var e = Number(prompt('indtast opløftede tal'));
var pow = function(r, e) {
    if (e <= 1) {
        return r * e;
    } else {
    return r * pow(r, e-1);
    }
};
console.log(pow(r, e));

// JS.Loops.73
var r = Number(prompt('Indtast roden: '));
var e = Number(prompt('Indtast det opløftede tal: '));

var powi = function(r, e) {

while ( e <= 1  ) {
	if (e === 0) {
		return 1;
	}
	return r * e;
	e++;
}
	return r * powi(r, e - 1);
};
console.log( r + ' opløftet i ' + e + ' er ' + powi(r, e));


// JS.Loops.74
'use strict'; 
var n = Number(prompt('Write a number and get the factorial: '));

var facti = function(n) {
	while (n <= 1) {
		return 1;
		n++;
	}
	return n * (facti(n - 1));
};
console.log('The number is: ' + facti(n));