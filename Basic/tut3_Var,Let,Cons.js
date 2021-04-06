//---------------------------------  Class # 3 ---------------------------------

//  var, let, const
var name1 = `"M.saeed"`;
var my_name = "M.saeed";
var my_name1 = "M.saeed";

console.log(name1 + " " + my_name + " " + my_name1);

/* 
# Rule for creating variable
1. Cannot start with number 
2. CAn start with numbers, letters, _, or $
3. Variable are case sensitive 
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
