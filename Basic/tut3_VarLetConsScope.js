//---------------------------------  Class # 3 ---------------------------------

//  var, let, const
var name1 = `"M.saeed"`;
var my_name = "M.saeed";
var my_name1 = "M.saeed";

console.log(name1 + " " + my_name + " " + my_name1);

/* 
# Rule for creating variable
1. Cannot start with number 
2. Can start with letters, _, or $
3. Variable are case sensitive 
*/

/* 
Ways to declare variable: 

let user = 'John', age = 25, message = 'Hello';

The multiline variant is a bit longer, but easier to read:

let user = 'John';
let age = 25;
let message = 'Hello';

Some people also define multiple variables in this multiline style:

let user = 'John',
age = 25,
message = 'Hello';

…Or even in the “comma-first” style:

let user = 'John'
, age = 25
, message = 'Hello';
*/

const m_name = `saeed`;
// m_name= `hairs`; //will generate an error becouse const var can't be changed
console.log(m_name);
var city = `hyderabad`;
{
  // console.log(city);
  let city = ` karachi`;
  console.log(city);
}
console.log(city);
//  let is local(block level) variable while var is gloabal variable

const arr1 = [1, 2, 3, 4];
console.log(arr1);
arr1.push(25);
console.log(arr1);

/* Most Commonprogramming cases types
1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
*/

/*-------------------Scope------------------*/

/*--------------------- GLOBAL--------------------------------- */

//There is only one Global scope throughout a JavaScript document.
// A variable is in the Global scope if it's defined outside of a function.
// Declared in the main code
// Known everywhere, useable everywhere
// Global variable is meaningful in every section of your code, whether that code is in the main body or in any of the functions.

var userName = "Ameen Alam";
console.log(userName); // output  `John`
function func1() {
  var userName = "John";
  console.log(userName); // 'userName' is accessible here and everywhere else
}
func1(); // output 'Ameen Alam'

/* -----------------------Local Scope------------------ */

// Local variables are those declared inside of a block.
// If variables defined inside a function are in the local scope.
// JavaScript has function scope: Each function creates a new scope.
//Known only inside the function, usable only inside the function
// Local variable is one that's meaningful only within the function that declares it.

//Examples: 1

function myName() {
  var age = 12;
}
myName();
// console.log(age); // age is not defined

//Examples: 2
var age = 100;
function go() {
  var age = 200;
  var hair = "black";
  console.log(age);
  console.log(hair);
}
go();
console.log(age);
// OUTPUT 200
// OUTPUT black
// OUTPUT 100

/*--------------------------SCOPE – Block Statements------------------------- */

// Block statements like if and switch conditions or for and while loops,
// Don't create a new scope.
// Variables defined inside of a block statement will remain in the scope they were already in.

if (true) {
  // this 'if' conditional block doesn't create a new scope
  var userName1 = "John"; // userName is still in the global scope
}
console.log(userName1);

/*-------------------LET--------------- */

//  The let statement declares a block scope local variable, optionally initializing it to a value.
// Variables declared by let have their scope in the block for which they are defined, as well as in any contained sub-blocks.
// In this way, let works very much like var.

/* -------------CONST------------- */

// The const keyword creates a read-only reference to a value.
// The const keyword works like the let keyword.
// The const keyword creates block-scoped variables whose values can't be reassigned.

//Example:
if (true) {
  const age = 1;
  let cool = true;
  var myAge = 23;
}
console.log(myAge); //Output 23 // var is accessible because var is a function scope.
//console.log(cool); //Output Uncaught ReferenceError: cool is not defined
console.log(age); //Output Uncaught ReferenceError: age is not defined


// Function Scope
function isCool(name) {
  if (true) {
    const cool = true;
  }
  console.log(cool);
}
isCool('daniyal');
  //Output Uncaught ReferenceError: cool is not defined