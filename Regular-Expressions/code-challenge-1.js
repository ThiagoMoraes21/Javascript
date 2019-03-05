/*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
 */

'use strict';

function regexVar() {
//  ^ => first item matches:
// () => stores matching value captured within
// [aeiou] => matches any of the characters in the brackets
// . => matches any character:
// * => for 0 or more occurrances of any character
// \1 => matches to previously stored match. 
    // \2 looks for matched item stored 2 instances ago 
    // \3 looks for matched item stored 3 ago, etc
//  $ ensures that matched item is at end of the sequence
    const re = /^([aeiou]).*\1$/;
    return re;
}

// test
function main() {
    const re = regexVar();
    const str1 = 'abcda';
    const str2 = 'bcd';
    const str3 = 'abcd';
    const str4 = 'ebcde';
    const str5 = 'aewxyzae';

    console.log(re.test(str1)); // true
    console.log(re.test(str2)); // false
    console.log(re.test(str3)); // false
    console.log(re.test(str4)); // true
    console.log(re.test(str5)); // false
}

main();