console.log(`Tutorial 8`);

const age = 20;

let myAge = 21;

// double == will only check/compare values, while triple === will check/compare both values & type of data.
// != value not equal to, !== value & type not equal to

if (age === `20`) {
  console.log(`age is 20 😠, type: string`);
} else if (age == 19) {
  console.log(`age is 19 😂`);
} else if (age === 20) {
  console.log(`age is 20 😍, type: number`);
} else {
  console.log(`age is neither 20 nor 19 😢`);
}

if (typeof myAge !== `undefined`) {
  console.log(`myAge is defined!`);
} else {
  console.log(`myAge is not defined!`);
}

let doesDrive = true;

if (myAge < 18) {
  console.log(`You are under-Age 😢`);
} else if (doesDrive || myAge < 18) {
  console.log(`You can't Drive 😠`);
} else if (doesDrive && myAge >= 18) {
  console.log(`You can Drive 🙂`);
}

// -----------------------------------ternary operator-----------------------------------

console.log(myAge == 21 ? `my age is 21` : `my age is not 21`); //myAge==='21'? `my age is 21`:`my age is not 21`

//-----------------------------------Multiple----------------------------------- ‘?’

// A sequence of question mark operators ? can return a value that depends on more than one condition.

// (condition? if true display this: if false display this)

let ages = prompt("age?", 18);
let message =
  ages < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";
alert(message);

/* 
1. The first question mark checks whether age < 3 .
2. If true – it returns 'Hi, baby!' . Otherwise, it continues to the expression after the colon
‘":"’, checking age < 18 .
3. If that’s true – it returns 'Hello!' . Otherwise, it continues to the expression after the next
colon ‘":"’, checking age < 100 .
4. If that’s true – it returns 'Greetings!' . Otherwise, it continues to the expression after the
last colon ‘":"’, returning 'What an unusual age!' .
*/

//switch

switch (myAge) {
  case 18:
    console.log(`You can't Drive 😠`);
    break;
  case 17:
    console.log(`You are under-Age 😢`);
    break;

  default:
    console.log(`You can't Drive 😠`);

    break;
}
//----------------------Breaking the loop----------------------

//For example, the loop below asks the user for a series of numbers, “breaking” when no number is entered:
let sum = 0;
while (true) {
  let value = +prompt("Enter a number", "");
  if (!value) break; // (*)
  sum += value;
}
alert("Sum: " + sum);

//The break directive is activated at the line (*) if the user enters an empty line or cancels the
//input. It stops the loop immediately, passing control to the first line after the loop. Namely,
//alert .

//----------------------Continue to the next iteration----------------------

// The continue directive is a “lighter version” of break . It doesn’t stop the whole loop.
// Instead, it stops the current iteration and forces the loop to start a new one (if the condition
// allows).

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;
  alert(i); // 1, then 3, 5, 7, 9
}

// Please note that syntax constructs that are not expressions cannot be used with the ternary
// operator ? . In particular, directives such as break/continue aren’t allowed there.

//----------------------Labels for break/continue----------------------

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");
    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)
    // do something with the value...
  }
}
alert("Done!");

/* In the code above, break outer looks upwards for the label named outer and breaks out
of that loop.
So the control goes straight from (*) to alert('Done!') .
We can also move the label onto a separate line: 

//////         Note: 
A call to break/continue is only possible from inside a loop and the label must be
somewhere above the directive.
*/
