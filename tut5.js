//---------------------------------  Class # 5  ---------------------------------

// type conersion and type coercion
let myVar;
myVar = 74;
console.log(myVar, typeof myVar);
myVar = String(74);
console.log(myVar, typeof myVar);
// Or
let num = 88;
console.log(num, typeof num);
let num2 = String(num);
console.log(num2, typeof num2);

let boolean1 = true;
console.log(boolean1, typeof boolean1);
let boolean2 = String(boolean1);
console.log(boolean2, typeof boolean2);

let arr = [1, 2, 3, 4];
//console.log(arr, typeof arr);
//console.log(arr.length, typeof arr);
console.log(arr.toString());

let array = String(arr);
console.log(array, typeof array);
console.log(array.length, typeof array);

let date = new Date();

console.log(date, typeof date);

let date1 = String(date); //let date = String(new Date());
console.log(date1, typeof date1);

let stri = `12354`;
console.log(stri, typeof stri);
let number = Number(stri); // or Number(`12345`);
console.log(number, typeof number);

let string = Number(`123df4`); // will give output "NaN" -> not a number
console.log(string, typeof string);

let bool = Number(true);
console.log(bool, typeof bool);

let number1 = 123.5566;
console.log(number1, typeof number1);
let number2 = parseInt(number1);
console.log(number2, typeof number2);

let string1 = `123.55`;
console.log(string1, typeof string1);
let number3 = parseFloat(string1);
console.log(number3.toFixed(5), typeof number3);

// Type coercion

let myStr = `125`;
let myNum = 225;
console.log(myStr + myNum);
let myStr1 = Number(myStr);
console.log(myStr1 + myNum);
