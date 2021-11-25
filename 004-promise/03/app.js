// let xmlhttp = new XMLHttpRequest();

// xmlhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
// xmlhttp.onload = function () {
//     console.log(JSON.parse(xmlhttp.response));
// };
// xmlhttp.onerror = function(err) {
//     console.error("Error", err);
// };
// xmlhttp.send();

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error("Error", err))
    .finally(() => console.log("done"));