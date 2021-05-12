// --------------------------------Object literal--------------------------------
let uni = {
  uni: `MUET`,
  location: `Jamshoro`,
};
let std = {
  name: `Muhammad Saeed`,
  rollNo: `18sw123`,
  dept: `Software`,
};

std.__proto__ = uni; // sets std to be a prototype of uni

console.log(std);
console.log(std.uni + `,   ` + std.location);

//--------------------------------Object prototype--------------------------------

// creating object contructor
function Obj2(giveName, rollNo, dept) {
  this.name = giveName;
  this.rollNo = rollNo;
  this.dept = dept;
}

// setters
Obj2.prototype.getName = function () {
  return this.name;
};
// getters
Obj2.prototype.setName = function (setName) {
  this.name = setName;
};

let std1 = new Obj2(`Muhammad Saeed`, `18sw123`, `software`);

console.log(std1);
console.log(std1.getName());
std1.setName(`Muhammad Saeed Khan`);
console.log(std1.getName());
