// let [firstName, surname] = "John Smith".split("h");
// console.log(firstName); // John
// console.log(surname);

// let arr = ["John", "Smith"];
// arr = ["J", "S"];
// let [firstName, surname] = arr;
// console.log(firstName);
// console.log(surname);

// let [firstName, , title] = [
//   "Julius",
//   "Caesar",
//   "Consul",
//   "of the Roman Republic",
// ];
// console.log(title);

// let guest = "Jane";
// let admin = "Pete";

// // Let's swap the values: make guest=Pete, admin=Jane
// [guest, admin] = [admin, guest];
// console.log(`${guest} ${admin}`);

// // runs only prompt for surname
// let [name = prompt("name?"), surname = prompt("surname?")] = ["Julius"];
// alert(name); // Julius (from array)
// alert(surname); //null // Anonymous (default used)

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };
// let { title, width, height } = options;
// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };
// // { sourceProperty: targetVariable }
// let {width: w, height: h, title} = options;
// // width -> w
// // height -> h
// // title -> title
// alert(title);  // Menu
// alert(w);      // 100
// alert(h);      // 200

// let options = {
//   title: "Menu",
// };
// let { width = prompt("width?"), title = prompt("title?") } = options;
// alert(title); // Menu
// alert(width);

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ["Cake", "Donut"],
//   extra: true,
// };

// // destructuring assignment split in multiple lines for clarity
// let {
//   size: {
//     // put size here
//     width,
//     height,
//   },
//   items: [item1, item2], // assign items here
//   title = "Menu", // not present in the object (default value is used)
// } = options;

// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200
// console.log(item1); // Cake
// console.log(item2); // Donut

// we pass object to function
// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"],
// };

// function showMenu({
//   title = "Untitled",
//   width: w = 100, // width goes to w
//   height: h = 200, // height goes to h
//   items: [item1, item2], // items first element goes to item1, second to item2
// }) {
//   console.log(`${title} ${w} ${h}`); // My Menu 100 200
//   console.log(item1); // Item1
//   console.log(item2); // Item2
// }
// console.log(showMenu(options ));

// function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
//   console.log(`${title} ${width} ${height}`);
// }
// showMenu();

//task1
// let user = {
//   name: "John",
//   years: 30,
//   extra: true,
// };

// let { name, years: age, isAdmin = false } = user;
// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false

//task2
function topSalary(salaries) {
  let topSalary = null;
  //iterable: start to end- loop
  for (let [key, value] of Object.entries(salaries)) {
    //entries: pair
    if (value > topSalary) {
      //when value in Object is greater than topSalary (start from 0)
      topEarner = key; // destructuring assignment (change value with =)
      topSalary = value;
    }
  }
  return topEarner;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
  Tori: 300,
};

console.log(topSalary(salaries));

// function topSalary(salaries) {
//   if (!salaries == true) null;
//   if (!salaries == false) {
//     for (let [key, value] of Object.entries(salaries)) {
//       if (value.a > value.b) return key.a;
//       if (value.a == value.b) return key.a && key.b;
//       if (value.a < value.b) return key.b;
//     }
//     return topEarner;
//   }
// }
// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
//   Tori: 300,
// };
// console.log(topSalary(salaries));

// function topSalary(salaries) {
//   let maxSalary = 0;
//   let maxName = null;

//   for (let [name, salary] of Object.entries(salaries)) {
//     if (maxSalary < salary) {
//       maxSalary = salary;
//       maxName = name;
//     }
//   }

//   return maxName;
// }
// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
//   Tori: 300,
// };
// console.log(topSalary(salaries));
