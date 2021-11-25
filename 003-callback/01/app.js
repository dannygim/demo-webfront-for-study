// https://developer.mozilla.org/ja/docs/Glossary/Callback_function

function greeting(name) {
    alert('Hello ' + name);
}

function processUserInput(callback) {
    let name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(greeting);