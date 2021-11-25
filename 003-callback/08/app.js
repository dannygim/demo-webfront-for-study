function main(callback, errorCallback) {
    console.log("start main");
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open('GET', 'https://wrongurl.com/users', true);
    xmlhttp.onload = function () {
        callback(xmlhttp.response);
    };
    xmlhttp.onerror = errorCallback;
    xmlhttp.send();

    console.log("end main");
}

main(function (response) {
    console.log("callback, response", response);
}, function () {
    console.log('an error occurred');
});