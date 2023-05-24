// Basic syntax von static
// class ClassWithStaticMethod {
//     static staticProperty = 'someValue';
//     static staticMethod() {
//       return 'static method has been called.';
//     }
//     static {
//       console.log('Class static initialization block called');
//     }
//   }

//   console.log(ClassWithStaticMethod.staticProperty);
//   // Expected output: "someValue"
//   console.log(ClassWithStaticMethod.staticMethod());
//   // Expected output: "static method has been called."

// class User {
//   static staticMethod() {
//     console.log(this === User);
//   }
// }

// User.staticMethod(); // true
// // //=
// class User {} //empty obj

// User.staticMethod = function () {
//   console.log(this === User);
// };
// User.staticMethod(); // true

//add Article compare static method:
// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }

//   static compare(articleA, articleB) {
//     return articleA.date - articleB.date;
//   }
// }

// // usage
// let articles = [
//   new Article("HTML", new Date(2019, 1, 1)),
//   new Article("CSS", new Date(2019, 0, 1)),
//   new Article("JavaScript", new Date(2019, 11, 1)),
// ];

// articles.sort(Article.compare);
// console.log(articles[0].title); // CSS

// implementation by the constructor
// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }

//   static createTodays() {
//     // remember, this = Article
//     return new this("Today's digest", new Date());
//   }
// }

// let article = Article.createTodays();

// console.log(article.title); // Today's digest
// console.log(article.date); // 2023-05-23T22:47:08.826Z

// article.createTodays(); /// Error: article.createTodays is not a function

// // staticMethods Usages in database usw..
// // assuming Article is a special class for managing articles
// // static method to remove the article by id:
// Article.remove({ id: 12345 });

//static properties
// class Article {
//   static publisher = "Ilya Kantor";
// }

// console.log(Article.publisher); // Ilya Kantor
// Article.publisher = "Ilya Kantor";

// static properties and methods are inherited
// class Animal {
//   static planet = "Earth";   // staticProperty

//   constructor(name, speed) {
//     this.speed = speed;
//     this.name = name;
//   }

//   run(speed = 0) {
//     this.speed += speed;
//     console.log(`${this.name} runs with speed ${this.speed}.`);
//   }

//   static compare(animalA, animalB) {    //staticMethod
//     return animalA.speed - animalB.speed;
//   }
// }

// Inherit from Animal
// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} hides!`);
//   }
// }

// let rabbits = [new Rabbit("White Rabbit", 10), new Rabbit("Black Rabbit", 5)];
// rabbits.sort(Rabbit.compare);
// rabbits[0].run(); // Black Rabbit runs with speed 5.
// console.log(Rabbit.planet); // Earth

//prototype explain
// class Animal {
//   static planet = "Earth";

//   constructor(name, speed) {
//     this.speed = speed;
//     this.name = name;
//   }

//   run(speed = 0) {
//     this.speed += speed;
//     console.log(`${this.name} runs with speed ${this.speed}.`);
//   }

//   static compare(animalA, animalB) {
//     return animalA.speed - animalB.speed;
//   }
// }
// // class Animal {}
// class Rabbit extends Animal {}

// // for statics
// console.log(Rabbit.__proto__ === Animal); // true

// // for regular methods
// console.log(Rabbit.prototype.__proto__ === Animal.prototype); // true

//task1 1-1
// class Rabbit {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Rab");
// // hasOwnProperty method is from Object.prototype
// console.log(rabbit.hasOwnProperty("name")); // true
// console.log(rabbit.name); //Rab

//Rabbit provides access to the static methods of Object via Rabbit, like this:
class Rabbit extends Object {}
// normally we call Object.getOwnPropertyNames
console.log(Rabbit.getOwnPropertyNames({ a: 1, b: 2 })); // a,b

// task1-1 lösung DEMO Version
// console.log(Rabbit.prototype.__proto__ === Object.prototype); // (1) true
// console.log(Rabbit.__proto__ === Object); // (2) false (!)
// console.log(Rabbit.__proto__ === Function.prototype); // as any function by default

// // error, no such function in Rabbit
// console.log(Rabbit.getOwnPropertyNames({ a: 1, b: 2 })); // Error

//task1 1-2
// class Rabbit extends Object {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Rab");

// console.log(rabbit.hasOwnProperty("name")); // true
// console.log(rabbit.name); //Rab
