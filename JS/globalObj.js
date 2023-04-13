// console.log("Hello");
// // is the same as
// window.console.log("Hello");

// var gVar = 5;
// console.log(globalThis.gVar);

// weil global Obj in Browser window heißt, und hier um window. geht, schreibe ich statt console.log ein alert.
// alert- Browser sichtbar
// console.log nur in node JS
// var gVar = 5;
// alert(window.gVar);

// let gLet = 5;
// alert(window.gLet); // undefined

// make current user information global, to let all scripts access it
// window.currentUser = {
//   name: "John",
// };

// // somewhere else in code
// alert(currentUser.name); // John

// // or, if we have a local variable with the name "currentUser"
// // get it from window explicitly (safe!)
// alert(window.currentUser.name);


//polyfill
if (!window.Promise) {
  alert("Your browser is really old!");
}

if (!window.Promise) {
    window.Promise = ... // custom implementation of the modern language feature
  }