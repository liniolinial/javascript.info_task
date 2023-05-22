// let animal = {
//   eats: true,
// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

// console.log(rabbit.eats); // true

// //default
// function Rabbit() {}
// /* default prototype
// Rabbit.prototype = { constructor: Rabbit };
// */

// // function Rabbit() {}
// // // by default:
// // // Rabbit.prototype = { constructor: Rabbit }
// // console.log(Rabbit.prototype.constructor == Rabbit); // true

// function Rabbit() {}
// // by default:
// // Rabbit.prototype = { constructor: Rabbit }

// let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

// console.log(rabbit.constructor == Rabbit); // true (from prototype)

// function Rabbit(name) {
//   this.name = name;
//   console.log(name);
// }

// let rabbit = new Rabbit("White Rabbit");

// let rabbit2 = new rabbit.constructor("Black Rabbit");

//no ensurence
// function Rabbit() {}
// Rabbit.prototype = {
//   jumps: true,
// };

// let rabbit = new Rabbit();
// console.log(rabbit.constructor === Rabbit); // false   === ist nicht, weil type anders ist.

// //solution1
// function Rabbit() {}

// // Not overwrite Rabbit.prototype totally
// // just add to it
// Rabbit.prototype.jumps = true;
// // the default Rabbit.prototype.constructor is preserved

// //////////////////////////////77

// //solution2
// Rabbit.prototype = {
//   jumps: true,
//   constructor: Rabbit,
// };

// // now constructor is also correct, because we added it

//task1
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();
Rabbit.prototype = {};
console.log(rabbit.eats); // true
