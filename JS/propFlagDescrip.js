//beispiel getter function
// const obj = {
//   firstName: "John",
//   lastName: "Doe",

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(obj.fullName); // Ausgabe: John Doe

// //beispiel setter function
// const obj = {
//   firstName: "",
//   lastName: "",

//   set fullName(name) {
//     const [firstName, lastName] = name.split(" ");
//     this.firstName = firstName;
//     this.lastName = lastName;
//   },
// };

// obj.fullName = "John Doe";

// console.log(obj.firstName); // Ausgabe: John
// console.log(obj.lastName); // Ausgabe: Doe

//object.getOwnPropertyDescriptor
// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

// let user = {
//   name: "John",
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, "name");

// console.log(JSON.stringify(descriptor, null, 2)); //2= dritter parameter: es macht zwei spaltige Ergebnis(schöner)
// /* property descriptor:
//   {  //1       //2
//     "value": "John",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
//   }
//   */

//objectdefineProperty
// let user = {};

// Object.defineProperty(user, "name", {
//   value: "John",
// });

// let descriptor = Object.getOwnPropertyDescriptor(user, "name");

// console.log(JSON.stringify(descriptor, null, 2));
// /*
// {
//   "value": "John",
//   "writable": false,
//   "enumerable": false,
//   "configurable": false
// }
//  */

//non writable  -error only in strict mode
// let user = {
//   name: "John",
// };

// Object.defineProperty(user, "name", {
//   writable: false,
// });

// user.name = "Pete"; // Error: Cannot assign to read only property 'name'

//property is created form schratch
// let user = {};

// Object.defineProperty(user, "name", {
//   value: "John",
//   // for new properties we need to explicitly list what's true
//   enumerable: true,
//   configurable: true,
// });

// console.log(user.name); // John
// user.name = "Pete"; // Error

//non-enumerable true
// let user = {
//   name: "John",
//   toString() {
//     return this.name;
//   },
// };

// // By default, both our properties are listed:
// for (let key in user) console.log(key); // name, toString

//enumerable:false
// let user = {
//   name: "John",
//   toString() {
//     return this.name;
//   },
// };

// Object.defineProperty(user, "toString", {
//   enumerable: false,
// });

// // Now our toString disappears:
// // for (let key in user) console.log(key); // name
// console.log(Object.keys(user)); // name

//non-configurable
// let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(JSON.stringify(descriptor, null, 2));
// /*
// {
//   "value": 3.141592653589793,
//   "writable": false,
//   "enumerable": false,
//   "configurable": false
// }
// */

// //change value, overwrite impossible
// Math.PI = 3; // Error, because it has writable: false
// // delete Math.PI won't work either

//change value, to be writable again impossible
// Error, because of configurable: false
// Object.defineProperty(Math, "PI", { writable: true });
// // TypeError: Cannot redefine property: PI

// let user = {
//   name: "John",
// };

// Object.defineProperty(user, "name", {
//   configurable: false,
// });

// user.name = "Pete"; // works fine
// delete user.name; // Error

//username forever sealed
// let user = {
//   name: "John",
// };

// Object.defineProperty(user, "name", {
//   writable: false,
//   configurable: false,
// });

// // won't be able to change user.name or its flags
// // all this won't work:
// user.name = "Pete";
// delete user.name;
// Object.defineProperty(user, "name", { value: "Pete" });

// //Object.defineProperties(obj, descriptors)
// Object.defineProperties(user, {
//   name: { value: "John", writable: false },
//   surname: { value: "Smith", writable: false },
//   // ...
// });

Object.getOwnPropertyDescriptors(obj);
for (let key in user) {
  clone[key] = user[key];
}
