// let map = new Map();

// map.set("1", "str1"); // a string key
// map.set(1, "num1"); // a numeric key
// map.set(true, "bool1"); // a boolean key

// // remember the regular Object? it would convert keys to string
// // Map keeps the type, so these two are different:
// console.log(map.get(1)); // 'num1'
// console.log(map.get("1")); // 'str1'
// console.log(map.size); // 3

//

// let john = { name: "John" };
// let ben = { name: "Ben" };

// // for every user, let's store their visits count
// // let visitsCountMap = new Map();
// let visitsCountMap = {};

// // john is the key for the map
// visitsCountMap[ben] = 234;
// visitsCountMap[john] = 123;

// console.log(visitsCountMap["[object]"]); // 123

//

// let recipeMap = new Map([
//   ["cucumber", 500],
//   ["tomatoes", 350],
//   ["onion", 50],
// ]);

// iterate over keys (vegetables)
// for (let vegetable of recipeMap.keys()) {
//   console.log(vegetable); // cucumber, tomatoes, onion
// }

// // iterate over values (amounts)
// for (let amount of recipeMap.values()) {
//   console.log(amount); // 500, 350, 50
// }

// // iterate over [key, value] entries
// for (let entry of recipeMap) {
//   // the same as of recipeMap.entries()
//   console.log(entry); // cucumber,500 (and so on)
// }
// recipeMap.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`); // cucumber: 500 etc
// });

//

// let obj = {
//   name: "John",
//   age: 30,
// };
// let obje = {
//   name: "sdf",
//   age: 30,
// };
// let objd = {
//   name: "hhh",
//   age: 30,
// };

// let map = new Map(Object.entries());

// console.log(map.get(["[object]"].name)); // John

// let prices = Object.fromEntries([
//   ["banana", 1],
//   ["banana", 4],
//   ["banana", 8],
//   ["orange", 2],
//   ["meat", 4],
// ]);
// let map = new Map();
// map.set("banana", 1);
// map.set("banana", 4);
// map.set("banana", 3);
// map.set("banana", 9);
// map.set("orange", 2);
// map.set("meat", 4);

// let obj = Object.fromEntries(map.entries()); // make a plain object (*)

// // done!
// // obj = { banana: 1, orange: 2, meat: 4 }

// console.log(obj.banana); // 2

//

// Set
// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set keeps only unique values
// console.log( set.size ); // 3

// for (let user of set) {
//   console.log(user.name); // John (then Pete and Mary)
// }

//task1 v
// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];
// function unique(arr) {
//   //   let set = new Set(arr);
//   return Array.from(new Set(arr));
// }
// console.log(unique(values));

//task2
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// "Teachers".toLowerCase().split("").sort().join();
// "Teachers" -> "teachers" -> ['t', 'e', 'a', ...] -> ['a', 'c', 'e', ...] -> 'ace';
// new Map() : Wichtig ist keys können in einer Map nur einmal existieren

//#2-1
// function aclean(array) {
//   let map = new Map();
//   for (let word of array) {
//     let words = word.toLowerCase().split("").sort().join("");
//     map.set(words, word);
//     let maps = Array.from(map);
//     if (!maps.includes(words)) {
//       maps.push(words);
//     }
//   }
// }
// console.log(aclean(arr));

//#2-2
// function aclean(array) {
//   let map = new Map();
//   for (let word of array) {
//     let words = word.toLowerCase().split("").sort().join("");
//     map.set(words);
//     // if (map.size >= 1) {
//     //   if (!anagram.includes(word)) {
//     //     anagram.push(word);
//     //   }
//     // }
//   }
//   return map;
// }
// console.log(aclean(arr));

// #2.-SET Version
// function aclean(array) {
//   let set = new Set();
//   // let original = words.map((item) => item.toUpperCase().reverse().join(""));
//   for (let word of array) {
//     let words = word.toLowerCase().split("").sort().join("");
//     set.add(words);
//   }

//   if (set.size >= 1) {
//     for (let words of set) {
//       if (!array.includes(words)) {
//         // word = word.reverse();
//         array.push(wo);
//       }
//     }
//     // return anagram.push(original);
//   }
// }
// console.log(aclean(arr));

//task2-final test
// function aclean(arr) {
//   let map = new Map();
//   for (let word of arr) {
//     // split the word by letters, sort them and join back
//     let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//     map.set(sorted, word);
//   }
//   return Array.from(map.values());
// }
// console.log(aclean(arr));

//task3 v
// let map = new Map();
// map.set("name", "John");
// let keys = Array.from(map.keys());
// keys.push("more");
// console.log(keys);
console.log(window);

console.log({ key: "value" });
