function processUserInput(callback) {
    let name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(function (name) {
    alert('Hello ' + name);
});
