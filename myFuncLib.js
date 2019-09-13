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