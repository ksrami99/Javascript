// For loop

for (let i = 0; i <= 10; i++) {
    if (i == 7) {
        // console.log(`${i} is my luckey number`);
        continue;
    }

    if (i == 3) {
        //console.log("Break");
        break;
    }
    //console.log(i);
}

for (let i = 0; i < 10; i++) {
    // console.log('Number : ' + i);
    for (let j = 0; j < 10; j++) {
        //        console.log(`${i}, ${j}`);
    }
}

const names = ["Brad", "Sam", "Sara", "Jhon", "Tim"];

for (let i = 0; i < names.length; i++) {
    // console.log(names[i]);
}

// while-DoWhile Loop

// let i = 0;

// while (i<=20){
//   console.log(i);
//   i++;
// }

// Do while

// do {
//     console.log(i);
//     i++;
// } while (i <= 20);

// ---------------- Challange

/*
  print numbers from 1-100
  for multiple of 3 print fizz
  for multiple of 5 print Buzz
  for multiple of both print FizzBuzz

*/

for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        continue;
    }
    if (i % 3 == 0) {
        console.log("Fizz");
        continue;
    }
    if (i % 5 == 0) {
        console.log("Buzz");
        continue;
    }
    console.log(i);
}
