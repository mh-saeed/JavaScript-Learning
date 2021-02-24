// Arrays

let marks = [67, 88, 98, 74, 69, 96];
const fruits = [`Apple`, `Mango`, `Banana`, `Orange`, `Pineapple`];
const mixed = [`str`, 32, [23, 12]];

const arr = new Array(43, 123, 125, `Hassan`, `Saeed`, `Moiz`);

console.log(arr);
arr[0] = `Saeed`;
console.log(arr);

console.log(marks);
console.log(fruits);
console.log(mixed);

x = 0;
while (x < mixed.length) {
    console.log(mixed[x]);
    x++;
}

console.log(arr.length); // array methods(with braces) and properties(without braces). lenghth is property
console.log(Array.isArray(arr)); // array methods(with braces) and properties(without braces). lenghth is property

let findLocatonOf = marks.indexOf(74);
console.log(findLocatonOf); // will return index of given element

// Mutating or Modifying

marks.push(99); // will add element at the end(last index) of an array
console.log(marks);

marks.unshift(0900); // will add at 0 index of an array
console.log(marks);

marks.pop(); // will remove element from the last index of an array
console.log(marks);

marks.shift(); // will remove from 0 index of an array
console.log(marks);

marks.splice(1, 4); // will remove elements splice(from index, number of elements to be removed)
console.log(marks);

console.log(fruits);
fruits.reverse();
console.log(fruits);

let marks2 = [25, 55, 84, 124];
marks = marks.concat(marks2);
console.log(marks);

let myInfo = {
    name: `Muhammad Saeed`,
    age: 21,
    uniName: `MUET`,
    rollNo: 123,
    marks1: [22, 334, 455],
    deptName: `Software Eng:`

};
console.log(myInfo);
console.log(myInfo.name);

console.log(myInfo[`name`]);
console.log(myInfo.uniName);

console.log(myInfo.marks1);
console.log(myInfo.marks1[0]);



