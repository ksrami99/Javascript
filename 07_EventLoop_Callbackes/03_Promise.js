const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000);
});

promise
    .then((result) => {
        console.log(result); // "Success!"
    })
    .catch((error) => {
        console.error(error);
    });

fetch("https://api.github.com/users/ksrami99")
    .then((response) => response.json())
    .then((data) => console.log("Data:", data))
    .catch((error) => console.error("Error:", error));

Promise.all([
    fetch("https://api.github.com/users/ksrami99"),
    fetch("https://api.github.com/users/"),
]).then(([response1, response2]) => {
    console.log("Both fetched!");
});
