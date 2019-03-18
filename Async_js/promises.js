'use strict';

const posts = [
    { title: 'post1 ', body: 'This is post one' },
    { title: 'post2 ', body: 'This is post two' },
];

function getPosts() {
    // mimicking get data from a server, which can take some time 
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += post.title;
        });
        console.log(output);
    }, 1000);
}


function createPost(post) {
    return new Promise((resolve, reject) => {
        // faking interaction with a server 
        setTimeout(() => {
            posts.push(post);
            const err = false;

            if(!err) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }
        }, 2000);
    });
}

//  YOU STILL CAN USE THIS SINTAX
// createPost({ title: 'post3', body: 'This is post three' })
//         .then(getPosts)
//         .catch(err => {
//           console.log(err);
//         });

const fetch = require('node-fetch');

//  Promise all
const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Good bye');
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

Promise.all([promise1, promise2, promise3, promise4])
       .then(values => console.log(values));