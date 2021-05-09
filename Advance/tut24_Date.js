let today = new Date().toString();
console.log(today);
let mybd = new Date(`02 04 2000 12:05:09 `);
mybd = new Date(`02, 04, 2000, 12:05:09 `);
mybd = new Date(`02-04-2000, 12:05:09 `);
mybd = new Date(`02/04/2000, 12:05:09 `);
mybd = new Date(`Feb/04/2000, 12:05:09 `);
console.log(mybd);

let x;
x = mybd.getDate();
x = mybd.getDay();
x = mybd.getFullYear();
x = mybd.getHours();
x = mybd.getMilliseconds();
x = mybd.getSeconds();
x = mybd.getMinutes();
x = mybd.getTime();

console.log(x);
console.log(mybd);

mybd.setDate(20);
mybd.setFullYear(2013);
mybd.setMonth(11);
mybd.setHours(5);
mybd.setMinutes(25);
mybd.setSeconds(15);

console.log(mybd);

let otherDate = new Date();
otherDate.setDate(23);

console.log(otherDate);
