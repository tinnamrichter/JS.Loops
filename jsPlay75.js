'use strict';

const roll = function(a) {
    return Math.floor(Math.random() * a + 1);
}

const times = function(b, a) {
    let res;
    let tally = [];

    while (i < a) {
        res = roll(a);
        tally[i] = 0; 
        i++;
    }

    while (i < a) {
        res = roll(a);
        tally[res]++ 1;
        i ++ 1;
    }
};

var a = 6;
var b = 2;
let i = 1;
console.log('der blev slået' + tally[i]);
