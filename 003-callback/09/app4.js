function asynchronousFunc(num, callback, errorCallback) {
    setTimeout(function () {
        try {
            console.log("num", num);
            num++;
            if (callback) { callback(num); }
        } catch (err) {
            if (errorCallback) { errorCallback(err) };
        }
    }, 300);
}

asynchronousFunc(1, function (num) {
    asynchronousFunc(num, function (num) {
        asynchronousFunc(num, function (num) {
            asynchronousFunc(num, function (num) {
                asynchronousFunc(num);
            }, function (err) {
                console.error("Error", err);
            });
        }, function (err) {
            console.error("Error", err);
        });
    }, function (err) {
        console.error("Error", err);
    });
}, function (err) {
    console.error("Error", err);
});