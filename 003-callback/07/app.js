function main(callback, errorCallback) {
    console.log("start main");

    const wrongJsonString = '{"id" "danny"}';

    try {
        let jsonObj = JSON.parse(wrongJsonString);
        callback(jsonObj);
    } catch (err) {
        errorCallback();
    }

    console.log("end main");
}

main(function (response) {
    console.log("callback, response", response);
}, function () {
    console.log('an error occurred');
});