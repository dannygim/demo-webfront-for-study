function displayPost(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json()) // parse response to JSON
        .then(post => { // rendering post ..
            console.log(`post: ${JSON.stringify(post)}`);
            return post.userId;
        })
        .then(userId => fetch(`https://jsonplaceholder.typicode.com/users/${userId}`))
        .then(response => response.json()) // parse response to JSON
        .then(user => { // rendering user ..
            console.log(`user name=${user.name}, email=${user.email}`);
        })
        .then(() => fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`))
        .then(response => response.json()) // parse response to JSON
        .then(comments => { // rendering comment ..
            comments.forEach(comment => {
                console.log(`comment: ${JSON.stringify(comment)}`);
            });
        })
        .catch(err => console.error("Error", err))
        .finally(() => console.log("done"));

}

displayPost(1); // it's called when a user clicks a blog link