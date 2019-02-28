// When you declare a variable with the var keyword, it is declared globally,
// or locally if declared inside a function.

// The let keyword behaves similarly, but with some extra features.
//When you declare a variable with the let keyword inside a block, statement,
// or expression, its scope is limited to that block, statement, or expression.

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3

// This behavior will cause problems if you were to create a 
// function and store it for later use inside a for loop that uses the i variable. 

// USING LET
'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function () {
            return i;
        };
    }
}
console.log(printNumTwo()); // returns 2

console.log(i); // returns "i is not defined"