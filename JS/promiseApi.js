// let promise = Promise.all(iterable);

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
// ]).then(console.log); // 1,2,3 when promises are ready: each promise contributes an array member

// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://api.github.com/users/jeresig",
// ];

// // map every url to the promise of the fetch
// let requests = urls.map((url) => fetch(url));

// // Promise.all waits until all jobs are resolved
// Promise.all(requests).then((responses) =>
//   responses.forEach((response) =>
//     console.log(`${response.url}: ${response.status}`)
//   )
// );

// let names = ["iliakan", "remy", "jeresig"];

// let requests = names.map((name) =>
//   fetch(`https://api.github.com/users/${name}`)
// );

// Promise.all(requests)
//   .then((responses) => {
//     // all responses are resolved successfully
//     for (let response of responses) {
//       console.log(`${response.url}: ${response.status}`); // shows 200 for every url
//     }

//     return responses;
//   })
//   // map array of responses into an array of response.json() to read their content
//   .then((responses) => Promise.all(responses.map((r) => r.json())))
//   // all JSON answers are parsed: "users" is the array of them
//   .then((users) => users.forEach((user) => console.log(user.name)));

// //if rejected:
// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 2000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).catch(alert); // Error: Whoops!

// Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
//   }),
//   2,
//   3,
// ]).then(console.log); // 1, 2, 3

//promise settled
// Promise.all([
//   fetch("/template.html"),
//   fetch("/style.css"),
//   fetch("/data.json"),
// ]).then(render); // render method needs results of all fetches

//for bigger user input, api
// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://no-such-url",
// ];

// Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
//   // (*)
//   results.forEach((result, num) => {
//     if (result.status == "fulfilled") {
//       console.log(`${urls[num]}: ${result.value.status}`);
//     }
//     if (result.status == "rejected") {
//       console.log(`${urls[num]}: ${result.reason}`);
//     }
//   });
// });
// // [
// //     {status: 'fulfilled', value: ...response...},
// //     {status: 'fulfilled', value: ...response...},
// //     {status: 'rejected', reason: ...error object...}
// //   ]

// //polyfill
// if (!Promise.allSettled) {
//   const rejectHandler = (reason) => ({ status: "rejected", reason });

//   const resolveHandler = (value) => ({ status: "fulfilled", value });

//   Promise.allSettled = function (promises) {
//     const convertedPromises = promises.map((p) =>
//       Promise.resolve(p).then(resolveHandler, rejectHandler)
//     );
//     return Promise.all(convertedPromises);
//   };
// }

//promise.race
// let promise = Promise.race(iterable);

// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 2000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).then(console.log); // 1

// auch wenn hier reject erst kommt:
// erste Promise wird trotzdem nach 1 Sek abgelehnt.
//

//promise.any
// let promise = Promise.any(iterable);
// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 1000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).then(console.log); // 1

// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Ouch!")), 1000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Error!")), 2000)
//   ),
// ]).catch((error) => {
//   console.log(error.constructor.name); // AggregateError
//   console.log(error.errors[0]); // Error: Ouch!
//   console.log(error.errors[1]); // Error: Error!
// });
// // AggregateError
// // Error: Ouch!
// //     at Timeout._onTimeout (C:\Users\lynn.kim\Documents\Code Lab\javascript.info_task\JS\promiseApi.js:134:29)
// //     at listOnTimeout (node:internal/timers:559:17)
// //     at processTimers (node:internal/timers:502:7)
// // Error: Error!
// //     at Timeout._onTimeout (C:\Users\lynn.kim\Documents\Code Lab\javascript.info_task\JS\promiseApi.js:137:29)
// //     at listOnTimeout (node:internal/timers:559:17)
// //     at processTimers (node:internal/timers:502:7)

//promise resolve, reject
let promise = new Promise((resolve) => resolve(value));
