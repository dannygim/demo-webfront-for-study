function main(callback) {
    console.log("start main");

    document
        .querySelector('#btn-demo')
        .addEventListener('click', callback);

    console.log("end main");
}

main(function() {
   console.log("callback");
});