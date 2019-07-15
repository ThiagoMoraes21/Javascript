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
    }, 100);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        // faking interaction with a server 
        setTimeout(() => {
            posts.push(post);
            const err = false;

            if (!err) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }
        }, 200);
    });
}

// Async / Await
async function init() {
    await createPost({title: 'post3', body: 'This is post 3'});
    getPosts();
}

init();


// Async / Await using fetch
const fetch = require('node-fetch');

async function fetchUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log(data);
}

fetchUser();

