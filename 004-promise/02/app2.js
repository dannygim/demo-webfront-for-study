function asynchronousFunc(num) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                console.log("num", num);
                num++;
                resolve(num);
            } catch (err) {
                reject(err);
            }
        }, 300);
    });
}

asynchronousFunc(1)
    .then(asynchronousFunc)
    .then(asynchronousFunc)
    .then(asynchronousFunc)
    .then(asynchronousFunc)
    .catch(function(err) { console.error("Error", err); });
