// local storage will remain unchanged even after restarting browser(Items will not be removed)
// however session storage will changed after restarting browser(items will be removed)

console.log(`=> Local Storage`);
localStorage.setItem(`Name`, `Saeed`);
localStorage.setItem(`Name2`, `M. Hassan`);

let myArray = [`Aplle`, `Mango`, `Banana`, `Orange`, `Pine-apple`, `Graps`];

localStorage.setItem(`fruits`, myArray);// will store array as a string in local storage
localStorage.setItem(`fruits1`, JSON.stringify(myArray));// will also store array as a string in local storage but can be converted to an array using JSON.parse

let jsonArray = JSON.parse(localStorage.getItem(`fruits1`));// to get items from local storage as an array 
console.log(localStorage.getItem(`Name`));// to get items from local storage 
console.log(localStorage.getItem(`Name2`));// to get items from local storage 
console.log(jsonArray);
localStorage.removeItem(`Name2`);// to remove a specific item from local storage
console.log(localStorage.getItem(`Name2`));// to get items from local storage 


localStorage.clear(); // to remove all items from local storage

console.log(`=> Session Storage`);

sessionStorage.setItem(`Name`, `Saeed`);
sessionStorage.setItem(`Name2`, `M. Hassan`);

let myArray2 = [`Aplle`, `Mango`, `Banana`, `Orange`, `Pine-apple`, `Graps`];

sessionStorage.setItem(`fruits`, myArray2);// will store array as a string in local storage
sessionStorage.setItem(`fruits1`, JSON.stringify(myArray2));// will also store array as a string in local storage but can be converted to an array using JSON.parse

let jsonArray2 = JSON.parse(sessionStorage.getItem(`fruits1`));// to get items from session storage as an array 
console.log(sessionStorage.getItem(`Name`));// to get items from session storage 
console.log(localStorage.getItem(`Name2`));// to get items from session storage 
console.log(jsonArray2);
sessionStorage.removeItem(`Name2`);// to remove a specific item from session storage
console.log(sessionStorage.getItem(`Name2`));// to get items from session storage 


sessionStorage.clear(); // to remove all items from session storage