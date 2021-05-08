let z = Math;
let array = [99, 8, 7.8, 9, 55, 56, 7, 87, 123, 99];
z = Math.PI; // will print pie value 3.34
z = Math.E; // will print E value
z = Math.round(5.6); // will round the given number eg: 5.1 will rounded to 5 and 5.9 will be rounded to 6
z = Math.ceil(5.1); // will ceil the given number eg: 5.1 will be ceil to 6(In simple words it will convert it to highest number. 5.2 , 5.3 , 5.4, ... will also be coverted to 6)
z = Math.floor(5.9); // will floor the given number eg: 5.9 will be floored to 5(In simple words it will convert it to lowest number. 5.9 , 5.8 , 5.7, ... will also be coverted to 5)
z = Math.abs(-7.6); // will convert negative values to positive
z = Math.sqrt(49); // will provide squar root of given number
z = Math.pow(2, 6); // 2^6= 64
z = Math.max(1, 5, 8, 7, 9); // will give the highest value
z = Math.min(1, 5, 8, 7, 9); // will give the lowest value
z = Math.max(...array); // will give the highest value from an array
z = Math.min(...array); // will give the lowest value from an array
//Math.random genrates random values between 0 and 1
z = 10 * Math.random(); //will genrates random values between 0 and 10
z = 50 + 50 * Math.random(); //will genrates random values between 50 and 100
z = Math.ceil(50 + 50 * Math.random());

console.log(z);
