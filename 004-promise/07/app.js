'use strict'
new Promise(function (resolve, reject) {
    try {
        throw new Error('error 1');
        resolve(1);
    } catch (err) {
        reject(err);
    }
})
    .then(num => {
        throw new Error('error 2');
        return num + 1;
    })
    .then(num => {
        throw new Error('error 3');
        console.log("num:", num);
    })
    .catch(err => console.error("Error:", err))
    .finally(() => console.log("done"));
