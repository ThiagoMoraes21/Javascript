// Find a substring of length greater than 1 that starts and ends with same character.

const re = /(.).*\1/;

const str1 = 'wxyz';
const str2 = 'wxyzw';
const str3 = 'wxyzx';
const str4 = 'wxywz';

console.log('substring:', str1.match(re));
console.log('substring:', str2.match(re)[0]);
console.log('substring:', str3.match(re)[0]);
console.log('substring:', str4.match(re)[0]);

/* 
    Let's break down the regular expression (.).*\1:

    1: (.) captures any character.
    2: .* stipulates that the captured character must followed by zero or more occurrences
    of any character.
    3: \1 is a backreference to the first capture group in our expression (i.e., (.)).
    It stipulates that the character following whatever we matched in step 2 must match 
    whatever was captured inside the parentheses in step 1.
*/