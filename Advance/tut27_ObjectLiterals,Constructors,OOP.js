// Object literals

let myCar = {
  name: `Mehran`,
  model: `2010`,
  condition: `New`,
};
console.log(myCar);
console.log(myCar.name, myCar.model, myCar.condition);

// Constructors
function GeneralCars(name, model, condition) {
  this.name = name;
  this.model = model;
  this.condition = condition;
  this.run = function (x) {
    if (x) {
      return `Running!`;
    } else {
      return `Not Running!`;
    }
  };
}
let hondaCT = new GeneralCars(`Honda`, `2021`, `New`);
let mehran = new GeneralCars(`Mehran11`, `2011`, `used`);

console.log(hondaCT.name + ` ` + hondaCT.model + ` ` + hondaCT.condition);
console.log(hondaCT.run(true));

console.log(mehran.name + ` ` + mehran.model + ` ` + mehran.condition);
console.log(mehran.run(false));
