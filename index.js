// --------------------------------- clsse # 2 ---------------------------------

/* 
window.alert ( "hellow world" ); 
// we can use single quote '' or double "" quote to represent string and back quote ``  which is good practice  
alert("hello world");
 */
// undeined meaning no value
console.time("total time of execution is")// identifier in parenthesis must be same as .timeEnd method's identifier
console.log ( "hello World" );
console.log ( [1,2,3,4] ); // An array
console.assert(123>566, " this is not possible !"); // will give error if condition becomes false
console.table({saeed:"This", marks: 75}); // saeed and marks are objects
console.warn('this is a warning'); // will give warning
console.error("This is a error"); // will generate an error message
// console.clear();// will clear console
console.timeEnd("total time of execution is");// identifier in parenthesis must be same as .time method's identifier
// ⬆️ will calculate total time of execution of code with in tha methods


//---------------------------------  Class # 3 ---------------------------------

//  var, let, const
var name1 = `"M.saeed"`;
var my_name = "M.saeed";
var my_name1 = 'M.saeed';

console.log (name1 + ' ' + my_name + ' ' + my_name1); 


/* 
# Rule for creating variable
1. Cannot start with number 
2. CAn start with numbers, letters, _, or $
3. Variable are case sensitive 
*/

const m_name= `saeed`;
// m_name= `hairs`; //will generate an error becouse const var can't be changed
console.log(m_name);
var city = `hyderabad`;
{
    
    // console.log(city);
    let city = ` karachi`;
    console.log(city);
    
}
console.log (city);
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


//---------------------------------  Class # 4  ---------------------------------
/* 

Data type in JavaScript
1. Primitive Data type --> memory allocation in Stack, (String-> "saeed", numbers -> 45, Boolean -> true or false, Null -> intentional empty value, undefined, symbol)
2. Reference Data type --> memory allocation in heap(dynamic), (Arrays, Object literals, functions, Dates)

*/

// Primitive Data types
// string
let name = `Saeed`;
console.log(`my name is `+ name);
console.log (`My data type is ` + (typeof name)); // typeof method will tells us the the data type of variable


//Number 
let rollNumber = 123;
console.log (`My roll number is `+ rollNumber); 
console.log (`My data type is `+ (typeof rollNumber)); // typeof method will tells us the the data type of variable

//Boolean
let pakistan = true;
console.log (`Pakistan is `+ pakistan); // typeof method will tells us the the data type of variable
console.log (`My data type is `+ (typeof pakistan)); // typeof method will tells us the the data type of variable

// null
let nullVar = null; // bogus return value
console.log (`My data type is `+ (typeof nullVar)); // typeof method will tells us the the data type of variable

