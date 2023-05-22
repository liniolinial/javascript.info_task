// let animal = {
//   eats: true,
// };

// // create a new object with animal as a prototype
// let rabbit = Object.create(animal); // same as {__proto__: animal}

// console.log(rabbit.eats); // true

// console.log(Object.getPrototypeOf(rabbit) === animal); // true

// Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

//additional properties
// let animal = {
//   eats: true,
// };

// let rabbit = Object.create(animal, {
//   jumps: {
//     value: true,
//   },
// });

// console.log(rabbit.jumps); // true

// //descriptor
// let clone = Object.create(
//     Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)
//   );

//ver plain objects
// let obj = {};

// let key = prompt("What's the key?", "__proto__");
// obj[key] = "some value"; //hier wird ignoiert

// console.log(obj[key]); // [object Object], not "some value"!

//using map
// let map = new Map();

// let key = console.log("What's the key?", "__proto__");
// map.set(key, "some value");
// console.log(map.get(key)); // "some value" (as intended)

//trick
// let obj = Object.create(null);
// // or: obj = { __proto__: null }

// let key = console.log("What's the key?", "__proto__");
// obj[key] = "some value";

// console.log(obj[key]); // "some value"

// let obj = Object.create(null);
// console.log(obj); // Error (no toString)
// //[Object: null prototype] {}

//fine for associative arrays
// let chineseDictionary = Object.create(null);
// chineseDictionary.hello = "你好";
// chineseDictionary.bye = "再见";

// console.log(Object.keys(chineseDictionary)); // hello,bye

//task1
let dictionary = Object.create(null);

// // your code to add dictionary.toString method

// let dictionary = Object.create(null);
// set dictionary(value){
//     [this.apple, this.__proto__]=value.split(", ");
// }

// let key = console.log(Object.keys(dictionary));

// Object.prototype.toString = function () {
//   return this.apple + "," + this.__proto__;
// };

// Object.setPrototypeOf(Object.prototype, dictionary);
// dictionary.toString = function () {
//   let key = [];
// };

// let key = console.log("apple");
// dictionary[key] = "__proto__";

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";

// for (let key in dictionary) {
//   console.log(key); // "apple", then "__proto__"
// }

// console.log(dictionary); //

// //lösung:
// let dictionary = Object.create(null, {
//   toString: {
//     // define toString property
//     value() {
//       // the value is a function
//       return Object.keys(this).join();
//     },
//   },
// });

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";

// for (let key in dictionary) {
//   alert(key); // "apple", then "__proto__"
// }

// alert(dictionary); //

//task2
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");
console.log(rabbit); // "Rabbit"
//These calls do the same thing or not?

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
