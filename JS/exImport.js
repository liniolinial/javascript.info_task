// // export an array
// export let months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

// // export a constant
// export const MODULES_BECAME_STANDARD_YEAR = 2015;

// // export a class
// export class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// say.js
// function sayHi(user) {
//   alert(`Hello, ${user}!`);
// }

// function sayBye(user) {
//   alert(`Bye, ${user}!`);
// }

// export { sayHi, sayBye }; // a list of exported variables

// // main.js
// import { sayHi, sayBye } from "./say.js";

// sayHi("John"); // Hello, John!
// sayBye("John"); // Bye, John!
// // main.js
// import * as say from "./say.js";

// say.sayHi("John");
// say.sayBye("John");

//import as
// import {sayHi as hi, sayBye as bye} from './say.js';

// hi('John'); // Hello, John!
// bye('John'); // Bye, John!

// //export as
// // 📁 say.js
// ...
// export {sayHi as hi, sayBye as bye};

// // 📁 main.js
// import * as say from './say.js';

// say.hi('John'); // Hello, John!
// say.bye('John'); // Bye, John!

//export default
// 📁 user.js
// export default class User {
//   // just add "default"
//   constructor(name) {
//     this.name = name;
//   }
// }
// // 📁 main.js
// import User from './user.js'; // not {User}, just User

// new User('John');
// export class { // Error! (non-default export needs a name)
//     constructor() {}
//   }

//default keyword
// function sayHi(user) {
//   alert(`Hello, ${user}!`);
// }

// // same as if we added "export default" before the function
// export { sayHi as default };

// // 📁 user.js
// export default class User {
//     constructor(name) {
//       this.name = name;
//     }
//   }

//   export function sayHi(user) {
//     alert(`Hello, ${user}!`);
//   }

//   // 📁 main.js
// import {default as User, sayHi} from './user.js';

// new User('John');

// // 📁 main.js
// import * as user from './user.js';

// let User = user.default; // the default export
// new User('John');

// import {login, logout} from 'auth/index.js'
