async function asyncFunc() {
    return 10;
}

function promiseFunc() {
    return new Promise((resolve, reject) => {
        resolve(20);
    });
}

async function main() {
    let result1 = await asyncFunc();
    console.log(result1);

    let result2 = await promiseFunc();
    console.log(result2);
}

main();