/*
    Trolls are attacking your comment section!

    A common way to deal with this situation is to remove all of the vowels
    from the trolls' comments, neutralizing the threat.

    Your task is to write a function that takes a string and return a new string
    with all vowels removed.

    For example, the string "This website is for losers LOL!"
    would become "Ths wbst s fr lsrs LL!".

    Note: for this kata y isn't considered a vowel.
 */


const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
function disemvowel(str) {
    const res = str.split(' ').map(el => {
        return filterWord(el);
    });
    return res.map(el => el.join('')).join(' ');
}

function filterWord(str) {
    let word = str.split('');
    vowels.forEach(el => {
        if(str.includes(el)) {
            let remove = word.join('').indexOf(el);
            word.splice(remove, 1);
            return word;
        }
    });
    return word;
}

// tests
const res = disemvowel("This website is for losers LOL!")
const tst = teste(res);
console.log(res, tst);


function teste(str) {
    const shouldBe = "Ths wbst s fr lsrs LL!";
    if (str === shouldBe) return 'Test passed!';
    else return 'Test failed';
}