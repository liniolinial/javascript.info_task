// let timerId = setTimeout(() => console.log("never happens"), 1000);
// console.log(timerId); // timer identifier

// clearTimeout(timerId);
// console.log(timerId);

/////////hier
//clearInterval
// repeat with the interval of 2 seconds
// let timerId = setInterval(() => console.log("tick"), 2000);

// // // after 5 seconds stop
// setTimeout(() => {
//   clearInterval(timerId);
//   console.log("stop");
// }, 5000);

// function sayHi() {
//   console.log("Hello");
// }
// setTimeout(sayHi, 1000);

/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/

// let timerId = setTimeout(function tick() {
//   console.log("tick");
//   timerId = setTimeout(tick, 2000); // (*)
// }, 2000);
// hier kein stop: unendlich-> irgendwann wird die Server overloaded

// let delay = 5000;

// let timerId = setTimeout(function request() {
//   //   ...send request...

//   if (request) {
//     //failed due to server overload
//     // increase the interval to the next run
//     delay *= 2;
//   }

//   timerId = setTimeout(request, delay);
// }, delay);

//setInterval
// let j = 1;
// setInterval(function () {
//   func(j++);
// }, 100);

// //setTimeout
// let i = 1;
// setTimeout(function run() {
//   func(i++);
//   setTimeout(run, 100);
// }, 100);

//zero delay
// setTimeout(() => console.log("World"));
// console.log("Hello");

// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start); // remember delay from the previous call

//   if (start + 100 < Date.now())
//     console.log(times); // show the delays after 100ms
//   else setTimeout(run); // else re-schedule
// });

//etwas genauer für alle Computers
// let start = Date.now();
// let times = [];
// let loopCount = 0;

// setTimeout(function run() {
//   times.push(Date.now() - start); // remember delay from the previous call

//   if (loopCount < 10) {
//     // run the loop for 10 iterations
//     loopCount++;
//     setTimeout(run, 10); // re-schedule with a delay of 10ms
//   } else {
//     console.log(times); // show the delays after 10 iterations
//   }
// });

//task1
//version1
// function printNumbers(from, to) {
//   let timerId = setInterval(() => console.log("from"), 1000);
// }

// version1 mit setInterval
function printNumbers(from, to) {
  let timerId = setInterval(() => console.log(++from), 1000);
  setTimeout(() => {
    clearInterval(timerId);
    console.log(to);
  }, (to - from) * 1000);
}
printNumbers(3, 10);

//version2 mit setTimeout
// function printNumbers(from, to) {
//   if (from < to) {
//     console.log(from);
//     setTimeout(printNumbers, 1000, ++from, to);
//   }
// }
// printNumbers(3, 8);
