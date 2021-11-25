function main(callback) {
    console.log("start main");
    setTimeout(callback, 500);
    console.log("end main");
}

main(function() {
   console.log("callback");
});