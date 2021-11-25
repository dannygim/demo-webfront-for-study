const myPromise = new Promise(function (resolve, reject) {
    console.log("start");

    const jsonString = '{"id": "danny", "name": "Danny Gim"}';

    setTimeout(function () {
        try {
            const jsonObj = JSON.parse(jsonString);
            resolve(jsonObj);
        } catch (err) {
            reject(err);
        }
    }, 300);

    console.log("end");
});

myPromise
    .then(function (data) { console.log("Result:", data); })
    .catch(function (err) { console.error("Error!!", err); });