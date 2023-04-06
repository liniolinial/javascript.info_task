// let student = {
//   name: "John",
//   age: 30,
//   isAdmin: false,
//   courses: ["html", "css", "js"],
//   spouse: null,
// };

// let json = JSON.stringify(student);
// console.log(typeof json); // we've got a string!
// console.log(json);

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: ["john", "ann"],
// };

// meetup.place = room; // meetup references room
// room.occupiedBy = meetup; // room references meetup
// JSON.stringify(meetup); // Error: Converting circular structure to JSON

// let json = JSON.stringify(value[, replacer, space])

// let room = {
//   number: 23,
// };
// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room, // meetup references room
// };
// room.occupiedBy = meetup; // room references meetup
// console.log(JSON.stringify(meetup, ["title", "participants"]));
// // {"title":"Conference","participants":[{},{}]}

// let room = {
//   number: 23,
// };
// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room, // meetup references room
// };
// room.occupiedBy = meetup; // room references meetup
// console.log(
//   JSON.stringify(meetup, ["title", "participants", "place", "name", "number"])
// );

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room, // meetup references room
// };

// room.occupiedBy = meetup; // room references meetup

// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key}: ${value}`);
//     return key == "occupiedBy" ? undefined : value;
//   })
// );

// let user = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true,
//   },
// };
// console.log(JSON.stringify(user, null,2));

// let room = {
//   number: 23,
// };
// let meetup = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017, 0, 1)),
//   room,
// };
// console.log(JSON.stringify(meetup));

// let room = {
//   number: 23,
//   toJSON() {
//     return typeof this.number;
//   },
// };
// let meetup = {
//   title: "Conference",
//   room,
// };
// console.log(JSON.stringify(room)); // 23
// console.log(JSON.stringify(meetup));
// let value = JSON.parse(str, [reviver]);

// stringified array
// let numbers = "[0, 1, 2, 3]";
// numbers = JSON.parse(numbers);
// console.log(numbers[0]); //0

// let userData =
//   '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// let user = JSON.parse(userData);
// console.log(user.friends[1]); // 1

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup = JSON.parse(str);
// console.log(meetup.date.getDate()); // Error!

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function (key, value) {
//   if (key == "date") return new Date(value);
//   return value;
// });

// console.log(meetup.date.getDate());

// let schedule = `{
//   "meetups": [
//     {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//     {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//   ]
// }`;

// schedule = JSON.parse(schedule, function (key, value) {
//   if (key == "date") return new Date(value);
//   return value;
// });

// console.log(schedule.meetups[1].date.getFullYear()); // works!

//task1
// let user = {
//   name: "John Smith",
//   age: 35
// };

// let user2 = JSON.parse(JSON.stringify(user));

//task2
// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   occupiedBy: [{ name: "John" }, { name: "Alice" }],
//   place: room,
// };

// // circular references
// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     /* your code */
//     console.log(`${key}: ${value}`);
//     return key == "name" ? undefined : value;
//   })
// );

//test
// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room, // meetup references room
// };

// room.occupiedBy = meetup; // room references meetup

// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     // console.log(`${key}: ${value}`);
//     return key == "occupiedBy" ? undefined : value;
//   })
// );

//task2-lösung
// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   occupiedBy: [{ name: "John" }, { name: "Alice" }],
//   place: room,
// };

// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key}: ${value}`);
//     return key == "self" || (key == "place" && "room") ? undefined : value;
//   })
// );

// task 2 tobi-lösung
// let room = {
//   number: 23,
//   // occupiedBy: {
//   //title: "Conference",
//   // occupiedBy: [{ name: "John" }, { name: "Alice" }],
//   // place: room, // }
// };

// let meetup = {
//   title: "Conference",
//   occupiedBy: [{ name: "John" }, { name: "Alice" }],
//   place: room,
// };

// // circular references
// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     // console.log(key, `typeof value: ${typeof value}`);
//     console.log(`${key}: ${value}`);
//     return key == "self" || (key == "occupiedBy" && !Array.isArray(value))
//       ? undefined
//       : value;
//     // return key == "self" || key == "occupiedBy" ? undefined : value;
//   })
// );
// /* result should be: { "title":"Conference", "occupiedBy":[{"name":"John"},{"name":"Alice"}], "place":{"number":23} } */

// let c = [1, 2];
// let d = c;

// console.log(`c === d ${c === d}`);
// console.log(`c == d ${c == d}`);

// let c = [1, 2];
// console.log(`c = ${c}`);
// add(c, 3);
// console.log(`c = ${c}`);
// console.log(add(c, 3));

// function add(array, element) {
//   array = [element];
// }

let c = [1, 2];
add(c, 3);
console.log(`c = ${c}`); // [1, 2, 3]

function add(array, element) {
  array = [element];
}
