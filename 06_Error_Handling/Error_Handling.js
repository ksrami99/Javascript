try {
    // Code that might throw an error
    let result = 10 / 0;
    console.log("Result:", result);
} catch (err) {
    // Handle the error
    console.log("Error occurred:", err.message);
} finally {
    console.log("This always runs");
}

// try {
//     undefinedFunction(); // This will throw an error
// } catch (err) {
//     console.log(err.name); // ReferenceError
//     console.log(err.message); // undefinedFunction is not defined
//     console.log(err.stack); // Stack trace
// }

try {
    throw new Error("Something went wrong!");
} catch (err) {
    console.log(err.message); // Something went wrong!
}
