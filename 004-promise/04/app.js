new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
}).then((result) => {
    console.log(result); // 1
    return result * 2;
}).then((result) => {
    console.log(result); // 2
    return result * 2;
}).then((result) => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(result); // 4
        resolve(result * 2);
    });
})).then(result => console.log(result)); // 8