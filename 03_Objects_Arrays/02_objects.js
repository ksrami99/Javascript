const person = {
    name: "jhon Doe",
    age: 30,
    isAdmin: true,
    address: {
        street: "123 Main st",
        city: "Boston",
        state: "MA",
    },
    hobbies: ["Music", "sports"],
};

let x;
x = person.name;

person.hasChild = true;

const ob1 = {
    a: 1,
    b: 2,
};

const ob2 = {
    c: 3,
    d: 4,
};

const obj3 = { ...ob1, ...ob2 };

const obj4 = Object.assign({}, ob1, ob2);

console.log(person);
