function main(callback) {
    console.log("start main");
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xmlhttp.onload = function () {
        callback(xmlhttp.response);
    };
    xmlhttp.send();

    console.log("end main");
}

main(function (response) {
    console.log("callback, response", response);
});