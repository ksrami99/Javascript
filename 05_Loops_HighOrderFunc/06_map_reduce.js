const items = [1, 2, 3, 4, 5, 6];

const out = items.map((item) => {
    return item * 2;
});

console.log(out);

// Reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = numbers.reduce((acc, currentValue) => {
    return acc + currentValue;
}, 0);

console.log(sum);
