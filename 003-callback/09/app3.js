function asynchronousFunc(num, callback) {
    setTimeout(function () {
        console.log("num", num);
        num++;
        if (callback) { callback(num); }
    }, 300);
}

asynchronousFunc(1, function (num) {
    asynchronousFunc(num, function (num) {
        asynchronousFunc(num, function (num) {
            asynchronousFunc(num, function (num) {
                asynchronousFunc(num);
            });
        });
    });
});