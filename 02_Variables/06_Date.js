let d = new Date();

// d = new Date();
// d = d.toString();
let x;
d = new Date();

x = d.toString();

// d = new Date('07-10-2022 12:30:00 ');

x = d.getFullYear();
x = d.getMonth() + 1;
x = d.getDate();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();

x = Intl.DateTimeFormat("en-us").format(d);

console.log(x);
