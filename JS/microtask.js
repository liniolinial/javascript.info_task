// let promise = Promise.resolve();

// promise.then(() => console.log("promise done!"));

// console.log("code finished"); // this alert shows first
// // code finished
// // promise done!

// Promise.resolve()
//   .then(() => console.log("promise done!"))
//   .then(() => console.log("code finished"));
// //   promise done!
// //   code finished

//unhandled rejection
// let promise = Promise.reject(new Error("Promise Failed!"));
// promise.catch((err) => console.log("caught")); // caught

// // // doesn't run: error handled
// // window.addEventListener("unhandledrejection", (event) =>
// //   console.log(event.reason)
// // );

// //
// let promise = Promise.reject(new Error("Promise Failed!"));

// // Promise Failed!
// window.addEventListener("unhandledrejection", (event) => alert(event.reason));

//error handling
let promise = Promise.reject(new Error("Promise Failed!"));
setTimeout(() => promise.catch((err) => console.log("caught")), 1000);

// // Error: Promise Failed!
// window.addEventListener("unhandledrejection", (event) =>
//   console.log(event.reason)
// );
