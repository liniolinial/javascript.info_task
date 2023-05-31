// function bla(input) {
//   let hello = "hello there";
//   if (input.length < 10) {
//     return "it's shorter than 10.";
//   } else {
//     return hello + "good job";
//   }
// }
// let result1 = bla("hi");
// let result2 = bla("hello nice to meet you.");
// console.dir(result1);
// console.dir(result2);
// //node Types
// let elem = document.body;
// // let's examine: what type of node is in elem?
// console.log(elem.nodeType); // 1 => element
// // and its first child is...
// console.log(elem.firstChild.nodeType); // 3 => text
// // for the document object, the type is 9
// console.log(document.nodeType); // 9
// alert(document.body.nodeName); // BODY
// alert(document.body.tagName); // BODY
// alert(document.body.firstChild.tagName); // undefined (not an element)
// alert(document.body.firstChild.nodeName); // #comment
// // for document
// alert(document.tagName); // undefined (not an element)
// alert(document.nodeName); // #document{
// for (let li of document.querySelectorAll("li")) {
//   let title = li.firstChild.data;
// }
// console.log(title);
// alert(document.body.lastChild.nodeType);
alert(document);
alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); //node
