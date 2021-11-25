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
    .then(function (num) { return asynchronousFunc(num); })
    .then(function (num) { return asynchronousFunc(num); })
    .then(function (num) { return asynchronousFunc(num); })
    .then(function (num) { return asynchronousFunc(num); })
    .catch(function (err) { console.error("Error", err); });
