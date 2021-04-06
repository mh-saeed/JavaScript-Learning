// DOM (Document Object Model)

let a = window;

// window.alert(`Hello Saeed`);

/* let mess = prompt(`Enter your Name`);
console.log(`Your name is ` + mess);
 */

/* let conf = confirm(`Are you 18+?`); // will give true if user click on ok and false if user click on cancel
console.log(conf); */ //will give boolean value

console.log(a);

let d = window.document;
console.log("DOM" + d);

console.log("innerHeight " + window.innerHeight); // will print inner height of window 
console.log("innerWidth " + window.innerWidth); // will print inner Width of window 
console.log("outerHeight " + window.outerHeight); // will print outer height of window 
console.log("outerWidth " + window.outerWidth); // will print outer Width of window 

console.log(window.scrollX);// will print value of how much you have scrolled the window in x-axis direction
console.log(window.scrollY);//will print value of how much you have scrolled the window in y-axis direction

console.log(window.location);//will print location of the page/window in object
console.log(`\n location.href `, location.href);//will print url of the page/window 
console.log(`\n`, location.toString());


console.log(`\n`, window.history);
console.log(`\n`, location.toString());// will print location(url) of the page/window in string 

// history.back() // one step backward
// history.forward() // on step forward
//history.go(1) // positve value to go forward and negative to go backward
//location.reload(); // will reload the page





