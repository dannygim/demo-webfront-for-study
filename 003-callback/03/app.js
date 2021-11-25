function main(callback) {
    console.log("start main");
    callback();
    console.log("end main");
}

main(function() {
   console.log("callback");
});