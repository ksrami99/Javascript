// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data fetched!");
//         callback();
//     }, 1000);
// }

// fetchData(() => {
//     console.log("Callback executed.");
// });

// Promises

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Success!");
//     }, 1000);
// });

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// Async Await

async function fetchData() {
    const response = await new Promise((resolve) =>
        setTimeout(() => resolve("Data fetched!"), 1000)
    );
    console.log(response);
}

fetchData();
