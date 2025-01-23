// function doSomething(name) {
//     console.log("Hello " + name);
// }

// doSomething("Karan");

// callback

function doSomething(n) {
    console.log(n());
}

doSomething(() => {
    console.log("I am demo");
});

// Callback over Async Task

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!");
        callback();
    }, 1000);
}

fetchData(() => {
    console.log("Callback executed.");
});
