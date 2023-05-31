// document.body.myData = {
//   name: "Caesar",
//   title: "Imperator",
// };
// alert(document.body.myData.title); // Imperator

// document.body.sayTagName = function () {
//   alert(this.tagName);
// };
// document.body.sayTagName();

// Element.prototype.sayHi = function () {
//   alert(`Hello, I'm ${this.tagName}`);
// };
// document.documentElement.sayHi(); // Hello, I'm HTML
// document.body.sayHi(); // Hello, I'm BODY

// let input = document.querySelector("input");

// // attribute => property
// input.setAttribute("value", "text");
// alert(input.value); // text

// // // NOT property => attribute
// input.value = "newValue";
// alert(input.getAttribute("value")); // text (not updated!)

// let input = document.querySelector("input");

// // attribute => property
// input.setAttribute("id", "id");
// alert(input.id); // id (updated)

// // property => attribute
// input.id = "newId";
// alert(input.getAttribute("id")); // newId (updated)

//task2
// let links = document.querySelectorAll("a");

// // iterating
// links.forEach((link) => {
//   let href = link.getAttribute("href");

//   if (href.includes("://") && !href.startsWith("http://internal.com")) {
//     link.style.color = "orange";
//   }
// });

// let links = document.querySelectorAll("a");

// for (let link of links) {
//   let href = link.getAttribute("href");
//   if (!href) continue; // no attribute

//   if (!href.includes("://")) continue; // no protocol

//   if (href.startsWith("http://internal.com")) continue; // internal

//   link.style.color = "orange";
// }
