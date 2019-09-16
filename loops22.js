'use strict';
var n = Number(prompt('is this a prime number?'));
let i = 2;
function isPrime(p) {
    while (i < n ) {
        if (n % i === 0 ) {
            return false;
        } else {
            return true;
        }
        i++;
    }
};

document.write('That is ' + isPrime());