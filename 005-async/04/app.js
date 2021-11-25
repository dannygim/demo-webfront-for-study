async function displayPost(postId) {
    try {
        const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await resPost.json(); // parse response to JSON
        console.log(`post: ${JSON.stringify(post)}`);  // rendering post ..

        const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        const user = await resUser.json(); // parse response to JSON
        console.log(`user name=${user.name}, email=${user.email}`);  // rendering user ..

        const resComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const comments = await resComments.json(); // parse response to JSON

        comments.forEach(comment => { // rendering comment ..
            console.log(`comment: ${JSON.stringify(comment)}`);
        });
    } catch (err) {
        console.error("Error", err);
    } finally {
        console.log("done");
    }
}

displayPost(1); // it's called when a user clicks a blog link