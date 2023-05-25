////syntax:
// let promise = new Promise(function (resolve, reject) {
//   // executor (the producing code, "singer")
// });

////promise constructor and simple executor
////successful job
// let promise = new Promise(function (resolve, reject) {
//   // the function is executed automatically when the promise is constructed

//   // after 1 second signal that the job is done with the result "done"
//   setTimeout(() => resolve("done"), 1000);
// });

////error rejecting
// let promise = new Promise(function(resolve, reject) {
//     // after 1 second signal that the job is finished with an error
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });                 // neue obj

////settled
// let promise = new Promise(function(resolve, reject) {
//     resolve("done");

//     reject(new Error("…")); // ignored
//     setTimeout(() => resolve("…")); // ignored
//   });

////immediately calling resolve, reject
// let promise = new Promise(function (resolve, reject) {
//   // not taking our time to do the job
//   resolve(123); // immediately give the result: 123
// });
// console.log(promise); // Promise { 123 }

// //consumers then, catch
// promise.then(
//   function (result) {
//     /* handle a successful result */
//   },
//   function (error) {
//     /* handle an error */
//   }
// );

////reaction to a successfully resolved promise
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("done!"), 1000);
// });

// // resolve runs the first function in .then
// promise.then(
//   (result) => console.log(result), // shows "done!" after 1 second
//   (error) => console.log(error) // doesn't run
// );
// console.log(promise);
// // Promise { <pending> }
// // done!

////error promise
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// // reject runs the second function in .then
// promise.then(
//   (result) => console.log(result), // doesn't run
//   (error) => console.log(error) // shows "Error: Whoops!" after 1 second
// );
// console.log(promise);
// // Promise { <pending> }
// // Error: Whoops!
// //     at Timeout._onTimeout (C:\Users\lynn.kim\Documents\Code Lab\javascript.info_task\JS\promise.js:62:27)
// //     at listOnTimeout (node:internal/timers:559:17)
// //     at processTimers (node:internal/timers:502:7)

// //interesse nur an gelungene completions- then
// let promise = new Promise((resolve) => {
//   setTimeout(() => resolve("done!"), 1000);
// });

// promise.then(console.log); // shows "done!" after 1 second

////interesse nur an error -catch
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// // .catch(f) is the same as promise.then(null, f)
// promise.catch(alert); // shows "Error: Whoops!" after 1 second

//cleanup
// finally
// new Promise((resolve, reject) => {
//     /* do something that takes time, and then call resolve or maybe reject */
//   })
//     // runs when the promise is settled, doesn't matter successfully or not
//     .finally(() => stop loading indicator)
//     // so the loading indicator is always stopped before we go on
//     .then(result => show result, err => show error)

// //pass through
// new Promise((resolve, reject) => {
//   setTimeout(() => resolve("value"), 2000);
// })
//   .finally(() => console.log("Promise ready")) // triggers first
//   .then((result) => console.log(result)); // <-- .then shows "value"

// //error case
// new Promise((resolve, reject) => {
//   throw new Error("error");
// })
//   .finally(() => console.log("Promise ready")) // triggers first
//   .catch((err) => console.log(err)); // <-- .catch shows the error

// attach handlers to settled promises
// // the promise becomes resolved immediately upon creation
// let promise = new Promise((resolve) => resolve("done!"));
// promise.then(console.log); // done! (shows up right now)

//
//loadScript
// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load error for ${src}`));

//   document.head.append(script);
// }

// //rewriting with promise
// function loadScript(src) {
//   return new Promise(function (resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Script load error for ${src}`));

//     document.head.append(script);
//   });
// }

// //usage
// let promise = loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
// );

// promise.then(
//   (script) => alert(`${script.src} is loaded!`),
//   (error) => alert(`Error: ${error.message}`)
// );

// promise.then((script) => alert("Another handler..."));

//task1
// re-resolve a promise
// let promise = new Promise(function (resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// promise.then(console.log);

//task2
// function delay(ms) {
//   // your code
//   let promise = new Promise((resolve) => {
//     setTimeout(() => resolve("runs after 3 seconds"), ms);
//   });
//   return promise;
// }

// delay(3000).then(() => console.log("runs after 3 seconds"));

//task3
//callback
//falscher versuch
// function showCircle(src, div) {
//   let promise = new Promise((resolve, reject) => {
//     div.add = () => resolve("message-ball");
//     // div.append = () => resolve("Hello, world!");
//     // div.append = () => reject(new Error(`Script load error for ${div}`));
//   })
//     .finally(() => console.log("Hello, world!"))
//     .then((result) => console.log(result));
//   //   return promise;
// }

// showCircle(150, 150, 100, (div) => {
//   div.classList.add("message-ball");
//   div.append("Hello, world!");
// });

// //   const loadScript = (src, callback) => {
// //     let script = document.createElement("script");
// //     script.src = src;
// //     // Rest of your code...
// //   };

//Lösung tricky
// <!DOCTYPE html>
// <html>

// <head>
//   <meta charset="utf-8">
//   <style>
//     .message-ball {
//       font-size: 20px;
//       line-height: 200px;
//       text-align: center;
//     }
//     .circle {
//       transition-property: width, height;
//       transition-duration: 2s;
//       position: fixed;
//       transform: translateX(-50%) translateY(-50%);
//       background-color: red;
//       border-radius: 50%;
//     }
//   </style>
// </head>

// <body>

//   <button onclick="go()">Click me</button>

//   <script>

//   function go() {
//     showCircle(150, 150, 100).then(div => {
//       div.classList.add('message-ball');
//       div.append("Hello, world!");
//     });
//   }

//   function showCircle(cx, cy, radius) {
//     let div = document.createElement('div');
//     div.style.width = 0;
//     div.style.height = 0;
//     div.style.left = cx + 'px';
//     div.style.top = cy + 'px';
//     div.className = 'circle';
//     document.body.append(div);

//     return new Promise(resolve => {
//       setTimeout(() => {
//         div.style.width = radius * 2 + 'px';
//         div.style.height = radius * 2 + 'px';

//         div.addEventListener('transitionend', function handler() {
//           div.removeEventListener('transitionend', handler);
//           resolve(div);
//         });
//       }, 0);
//     })
//   }
//   </script>

// </body>
// </html>
