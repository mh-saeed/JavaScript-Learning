/* let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};
rabbit.__proto__ = animal;  */

let animal = {
  eats: true,
  walk() {
    return "Animal walk";
  },
};
let rabbit = {
  jumps: true,
  __proto__: animal,
};

// we can find both properties in rabbit now:
console.log(rabbit.jumps); // true
console.log(rabbit.walk());   
console.log(rabbit.eats); // true
