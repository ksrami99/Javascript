const items = ["book", "Table", "chair", "kite"];

items.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

const colorObj = [
    { color: "red" },
    { color: "green" },
    { color: "blue" },
    { color: "orange" },
];

colorObj.forEach((item) => {
    console.log(item.color);
});
