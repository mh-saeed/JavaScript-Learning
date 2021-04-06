//---------------------------------  Class # 4  ---------------------------------
/* 

Data type in JavaScript
1. Primitive Data type --> memory allocation in Stack, (String-> "saeed", numbers -> 45, Boolean -> true or false, Null -> intentional empty value, undefined, symbol)
2. Reference Data type --> memory allocation in heap(dynamic), (Arrays, Object literals, functions, Dates)

*/

// Primitive Data types
// string
let name = `Saeed`;
console.log(`my name is ` + name);
console.log(`My data type is ` + typeof name); // typeof method will tells us the the data type of variable

//Number
let rollNumber = 123;
console.log(`My roll number is ` + rollNumber);
console.log(`My data type is ` + typeof rollNumber); // typeof method will tells us the the data type of variable

//Boolean
let pakistan = true;
console.log(`Pakistan is ` + pakistan); // typeof method will tells us the the data type of variable
console.log(`My data type is ` + typeof pakistan); // typeof method will tells us the the data type of variable

// null
let nullVar = null; // bogus return value
console.log(`My data type is ` + typeof nullVar); // typeof method will tells us the the data type of variable

//Undefined

let unDef;
console.log(`My data type is ` + typeof unDef);

// Refrence datatyps
//     Arrays
let arrayVar = [1, 2, 4, 3, 5, true, `hyderabad`];
console.log(`My data type is ` + typeof arrayVar);

//Object literals
let stdMarks = {
    saeed: 75,
    moiz: 80,
    hassan: 81
}
console.log(stdMarks);
console.log(`My data type is ` + typeof stdMarks);

function myname(pram) {

}
console.log(`My data type is ` + typeof myname);



let date = new Date();
console.log(`My data type is ` + typeof date);
