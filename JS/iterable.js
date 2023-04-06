// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   },
// };

// for (let char of "test") {
//   // triggers 4 times: once for each character
//   console.log(char); // t, then e, then s, then t
// }

// let str = "Hello";
// let iterator = str[Symbol.iterator]();
// while (true) {
//   let result = iterator.next();
//   if (result.done) break;
//   console.log(result.value); // outputs characters one by one
// }

// for (let num of range) {
//   let arr = Array.from(range, (num) => num * num);
//   console.log(arr);
// }

// let str = "T6*";
// // splits str into array of characters
// let chars = Array.from(str);
// console.log(chars[0]);
// console.log(chars[1]);
// console.log(chars[2]);
// console.log(chars.length); // 2

// let str = "𝒳😂";
// let chars = []; // Array.from internally does the same loop
// for (let char of str) {
//   chars.push(char);
// }
// console.log(chars);

function slice(str, start, end) {
  return Array.from(str).slice(start, end).join("");
}

let str = "slgI8bTT";
// "𝒳😂𩷶"
console.log(slice(str, 1, 3)); // 😂𩷶

// the native method does not support surrogate pairs
console.log(str.slice(1, 3));
