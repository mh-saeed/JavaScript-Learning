// Object literal
let obj1 = {
  name: `Muhammad Saeed`,
  uni: `MUET`,
  dept: `Software`,
};
console.log(obj1);

//Object prototype

function Obj2(giveName, rollNo, dept ) {
  this.name = giveName;
  this.rollNo = rollNo;
  this.dept=dept;

}
Obj2.prototype.getName = function () {
  return this.name;
};

Obj2.prototype.setName = function(setName) {
    this.name= setName;
}
let std1 = new Obj2(`Muhammad Saeed`,`18sw123`,`software`);

console.log(std1);
console.log(std1.getName());
std1.setName(`Muhammad Saeed Khan`);
console.log(std1.getName());
