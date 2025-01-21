if(1>0) console.log('True');


let age = 8;

if(age > 18 ) {
  console.log("You can drive!");
} else if (age === 18 ) {
  console.log('One Year ton go..');
} else {
  console.log("You cannot Drive!");
}

let accessAllowed = age > 18 ? true : false;


// let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

// alert( message );
console.log(message);