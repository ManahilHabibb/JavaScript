let myPromise = new Promise((resolve, reject) => {
    let a = Math.random();

    if (a<0.5) {
        resolve("successfully!");
    } else {
        reject("failed.");
    }
});

myPromise
    .then((message) => {
        console.log("Promise resolved: " + message);
    })
    .catch((error) => {
        console.error("Promise rejected: " + error);
    });