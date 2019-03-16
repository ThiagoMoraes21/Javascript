const posts = [
    {title: 'post1 ', body: 'This is post one'},
    {title: 'post2 ', body: 'This is post two'},
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

function createPost(post, callback) {
    // faking interaction with a server 
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title: 'post3', body: 'This is post three'}, getPosts);
