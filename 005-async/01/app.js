async function asyncFunc() {
    return 1;
}

asyncFunc().then(num => console.log(num));
const p = asyncFunc();
console.log(p);
