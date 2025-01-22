function sayHello() {
    console.log("Hello!");
}

sayHello();

// function add(num1, num2) {
//     console.log(num1 + num2);
// }
// add(5, 6);

function subtract(num1, num2) {
    return num1 - num2;
}

console.log(subtract(5, 6));

function registerUser(user = "Bot") {
    return user + " is registered";
}

console.log(registerUser("Karan"));

// rest Parameters

function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

// function Decoration

function addDollerSign(value) {
    return `${value}$`;
}

// Function Expression

const fun = function (value) {
    return `${value} inside function!`;
};

console.log(fun("Hey "));

// Arrow function

const add = (a, b) => {
    return a + b;
};

console.log(add(5, 6));

//console.log(addDollerSign(50));

//console.log(sum(1, 23, 4, 3, 8));
