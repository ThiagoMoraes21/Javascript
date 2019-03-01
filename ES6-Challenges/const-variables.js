// variables declared using const are read-only

"use strict"
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error

function printManyTimes(str) {
    "use strict";

    // change code below this line

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }

    // change code above this line

}
printManyTimes("freeCodeCamp");