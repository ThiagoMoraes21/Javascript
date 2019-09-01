/*
    Complete the solution so that it reverses all of the words within the string passed in.

    Example:
    reverseWords("The greatest victory is that which requires no battle")
    should return "battle no requires which that is victory greatest The"
*/

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(reverseWords("hello world!"), "world! hello")
Test.assertEquals(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda")
Test.assertEquals(reverseWords("foobar"), "foobar")
Test.assertEquals(reverseWords("kata editor"), "editor kata")
Test.assertEquals(reverseWords("row row row your boat"), "boat your row row row")
