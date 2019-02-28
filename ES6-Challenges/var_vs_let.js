'use strict'; // catches common coding mistakes and "unsafe" actions

// One of the biggest problems with declaring variables with the var keyword is that you can
// overwrite variable declarations without an error.
var camper = 'James';
var camper = 'David';
console.log(camper);
// logs 'David'

// A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword.
// If you were to replace var with let in the variable declarations
// of the code above, the result would be an error.

let camper = 'James';
let camper = 'David'; // throws an error

