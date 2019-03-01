// Mutate an Array Declared with const
const arr = [5, 7, 2];
console.log(arr);

// Replace the elements of the original array
function editInPlace() {
    "use strict";
    let newArr = [2, 5, 7]; // new array

    // s = [2, 5, 7]; <- this is invalid
    for (let el in s) {
        arr[el] = newArr[el];
    }

    return arr; // return new array
}

console.log(editInPlace()); // print new array



