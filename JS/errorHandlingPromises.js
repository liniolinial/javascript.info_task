// fetch("https://no-such-server.blabla") // rejects
//   .then((response) => response.json())
//   .catch((err) => alert(err)); // TypeError: failed to fetch (the text may vary)

//catch end of chain
// fetch("/article/promise-chaining/user.json")
//   .then((response) => response.json())
//   .then((user) => fetch(`https://api.github.com/users/${user.name}`))
//   .then((response) => response.json())
//   .then(
//     (githubUser) =>
//       new Promise((resolve, reject) => {
//         let img = document.createElement("img");
//         img.src = githubUser.avatar_url;
//         img.className = "promise-avatar-example";
//         document.body.append(img);

//         setTimeout(() => {
//           img.remove();
//           resolve(githubUser);
//         }, 3000);
//       })
//   )
//   .catch((error) => alert(error.message));

// //implicit try,catch
// new Promise((resolve, reject) => {
//     throw new Error("Whoops!");
//   }).catch(alert); // Error: Whoops!

// //   …Works exactly the same as this:

//   new Promise((resolve, reject) => {
//     reject(new Error("Whoops!"));
//   }).catch(alert); // Error: Whoops!

// //throw = reject
// new Promise((resolve, reject) => {
//   resolve("ok");
// })
//   .then((result) => {
//     throw new Error("Whoops!"); // rejects the promise
//   })
//   .catch(alert); // Error: Whoops!

// // auch für programming error
// new Promise((resolve, reject) => {
//   resolve("ok");
// })
//   .then((result) => {
//     blabla(); // no such function
//   })
//   .catch(alert); // ReferenceError: blabla is not defined

//rethrowing
// the execution: catch -> then
// new Promise((resolve, reject) => {
//   throw new Error("Whoops!");
// })
//   .catch(function (error) {
//     console.log("The error is handled, continue normally");
//   })
//   .then(() => console.log("Next successful handler runs"));

// // the execution: catch -> catch
// new Promise((resolve, reject) => {
//   throw new Error("Whoops!");
// })
//   .catch(function (error) {
//     // (*)

//     if (error instanceof URIError) {
//       // handle it
//     } else {
//       console.log("Can't handle such error");

//       throw error; // throwing this or another error jumps to the next catch
//     }
//   })
//   .then(function () {
//     /* doesn't run here */
//   })
//   .catch((error) => {
//     // (**)

//     console.log(`The unknown error has occurred: ${error}`);
//     // don't return anything => execution goes the normal way
//   });

//unhandled rejection
//problem situation
// new Promise(function () {
//   noSuchFunction(); // Error here (no such function)
// }).then(() => {
//   // successful promise handlers, one or more
// }); // without .catch at the end!

// //unhandledrejection
// window.addEventListener("unhandledrejection", function (event) {
//   // the event object has two special properties:
//   console.log(event.promise); // [object Promise] - the promise that generated the error
//   console.log(event.reason); // Error: Whoops! - the unhandled error object
// });

// new Promise(function () {
//   throw new Error("Whoops!");
// }); // no catch to handle the error

//task1
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch(console.log);

new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(console.log);
