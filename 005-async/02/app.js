function asyncFunc() {
    return Promise.resolve(1);
    // return new Promise((resolve, reject) => {
    //     resolve(1);
    // });
}

asyncFunc().then(num => console.log(num));
const p = asyncFunc();
console.log(p);
