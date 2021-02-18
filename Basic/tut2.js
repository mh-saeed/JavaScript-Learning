// --------------------------------- clsse # 2 ---------------------------------

/* 
window.alert ( "hellow world" ); 
// we can use single quote '' or double "" quote to represent string and back quote ``  which is good practice  
alert("hello world");
 */
// undeined meaning no value
console.time("total time of execution is"); // identifier in parenthesis must be same as .timeEnd method's identifier
console.log("hello World");
console.log([1, 2, 3, 4]); // An array
console.assert(123 > 566, " this is not possible !"); // will give error if condition becomes false
console.table({ saeed: "This", marks: 75 }); // saeed and mark are objects
console.warn("this is a warning"); // will give warning
console.error("This is a error"); // will generate an error message
// console.clear();// will clear console
console.timeEnd("total time of execution is"); // identifier in parenthesis must be same as .time method's identifier
// ⬆️ will calculate total time of execution of code with in tha methods
