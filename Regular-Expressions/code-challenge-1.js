/*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
 */

'use strict';

function regexVar() {
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