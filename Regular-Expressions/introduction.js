//  INTRODUCTION:
//  A Regular Expression, or RegEx, is a pattern used to match character combinations
//  in a string. In JavaScript, regular expressions are also objects.

//  CONSTRUCTING A REGULAR EXPRESSION:
//  We construct regular expressions by using regular expression literals or RegExp class objects.


//  REGULAR EXPRESSION PATTERNS:
//  Regular expression literal
//  A regular expression literal is a RegEx pattern encosed within forward slashes:
//    const re = /ab+c/;

//  This RegEx above matches the character a, followed by one or more instances of the character b,
//  followed by the character c.


//  RegExp OBJECTS:
//  We can write a regular expression string and pass it as an argument to the RegExp constructor:

//    const re = new RegExp('ab+c');

// FLAGS
// To create a RegExp object, we use this syntax:
// new RegExp(pattern[, flags])

// To create a regular expression literal, we use this syntax:
//  /pattern/flags

//  If specified, flags can have any combination of the following values:
//  g: global match.
//  i: ignore case.
//  m: multiline.Treats beginning(^) and end($) characters as working over multiple lines.
//  u: unicode.Treat pattern as a sequence of unicode code points.
//  y: sticky.Matches only from the index indicated by the lastIndex property of this regular expression in the target string.

//  ESPECIAL CHARACTERS IN REGULAR EXPRESSION
//  Link to the list: https://www.hackerrank.com/challenges/js10-regexp-1/topics/javascript-regex

// Regular expressions are used with the RegExp methods:

// test
// exec
// and with the String methods:

// match
// search
// split
// replace

//  THE TEST METHOD
//  The test method executes a search for a match between a regular expression and a specified string.
//  And returns true or false
//  Ex:

const re = /^learn/;
const str1 = 'learn regular expressions';
const str2 = 'write regular expressions';

console.log(re.test(str1)); // true
console.log(re.test(str2)); // false

//  The exec() method executes a search for a match in a specified string.
//  Returns a result array or null.

//  Match 'quick brown' followed by 'jumps', ignoring characters in between
//  Remember 'brown' and 'jumps'
//  Ignore case

const re2 = /quick\s(brown).+?(jumps)/ig;
const str = 'The Quick Brown Fox Jumps Over The Lazy Dog.';
const res = re2.exec(str);

console.log(res);
console.log();

// The result object contains following information:
// 1. [0] is the full string of characters matched
// 2. [1], ...[n] is the parenthesized substring matches, if any. The number of possible parenthesized substrings is unlimited.
// 3. index is the 0-based index of the match in the string.
// 4. input is the original string.

console.log('string of characters matched = ' + res[0]);
console.log('first parenthesized substring match = ' + res[1]);
console.log('second parenthesized substring match = ' + res[2]);
console.log('index of the match = ' + res.index);
console.log('original string = ' + res.input);
console.log('\n\n\n');

//  The match() method retrieves the matches when matching a string against a regular expression.

/*
    Find 'Chapter', followed by `$1$` or more numeric characters, 
    followed by a decimal point, followed by a zero or more numeric characters, 
    and use a flag to specify that the results are *case-insensitive*.
*/

const re3 = /see (chapter \d+(\.\d)*)/i;
const str4 = 'For more information on regular expressions, see Chapter 3.4.5.1 and CHAPTER 2.3';
console.log('Match()');
console.log(str4.match(re3));
console.log('\n\n\n');

// Search
// The search() method executes a search for a match between a regular expression
// and this String object. If successful, search() returns the index of the first match
// of the regular expression inside the string. Otherwise, it returns - 1.

const re4 = /learn/;
const str5 = 'Today, we\'ll learn about regular expressions.';
const str6 = 'Tomorrow, we\'ll write regular expressions '
    + 'and learn some complex expressions.';
const str7 = 'We\'re all done now!';

console.log('Search()');
console.log(str5);
console.log('A search for', re4, 'returns', str5.search(re4), '\n');
console.log(str6);
console.log('A search for', re4, 'returns', str6.search(re4), '\n');
console.log(str7);
console.log('A search for', re4, 'returns', str7.search(re4));
console.log('\n\n\n');

/*
    Split
    The split() method splits a String object into an array of strings by separating
    the string into substrings. Separator specifies the character(s) to use for separating
    the string. The separator is treated as a string or a regular expression. 
    If separator is omitted, the array returned contains one element consisting of the entire string.
    If separator is an empty string, str is converted to an array of characters.

*/

//  Split a name string at the space separating the first and last names.
const name = 'Julia Roberts';
const res2 = name.split(' ');

console.log('Split()');
console.log('The split array:', res2);
console.log('First Name:', res2[0]);
console.log('Last Name:', res2[1]);
console.log('\n\n\n');

/*
    Replace
    The replace(pattern, replacement) method returns a new string where some (or all)
    occurrences of a matched  have been replaced with a  substring.

    Pattern: This value can be a string or a RegExp object to match against the calling string.
    Replacement: This value can be a substring to replace the match with, or it can be a function
    to invoke that generates the replacement substring.
*/

//   replace any occurrence of the substring 'RegExp' with 'Regular Expression'
const reg = /RegExp/;
const myString = `We're learning about RegExp.`;
const replacementString = 'Regular Expressions';

console.log('Replace');
console.log(myString);
console.log(myString.replace(reg, replacementString));