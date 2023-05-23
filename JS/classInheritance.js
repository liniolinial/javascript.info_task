// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} runs with speed ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} stands still.`);
//   }
// }
// let animal = new Animal("My animal");
// // animal.run(); // My animal runs with speed undefined.
// // animal.stop(); // My animal stands still.

// //rabbit expend
// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} hides!`);
//   }
// }

// let rabbit = new Rabbit("White Rabbit");

// rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.hide(); // White Rabbit hides!
// animal.hide(); // animal.hide is not a function

// expend after parent
// function f(phrase) {
//   return class {
//     sayHi() {
//       console.log(phrase);
//     }
//   };
// }

// class User extends f("Hello") {}
// new User().sayHi(); // Hello

//overriding a method
// class Rabbit extends Animal {
//   stop() {
//     // ...now this will be used for rabbit.stop()
//     // instead of stop() from class Animal
//   }
// }

//super keyword
// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }

//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} runs with speed ${this.speed}.`);
//   }

//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} stands still.`);
//   }
// }

// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} hides!`);
//   }

//   stop() {
//     super.stop(); // call parent stop
//     this.hide(); // and then hide
//   }
// }

// let rabbit = new Rabbit("White Rabbit");

// rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.stop(); // White Rabbit stands still. White Rabbit hides!

//overriding constructor
//empty constructors
// class Rabbit extends Animal {
//   // generated for extending classes without own constructors
//   constructor(...args) {
//     super(...args);
//   }
// }

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   // ...
// }

// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     this.speed = 0;
//     this.name = name;
//     this.earLength = earLength;
//   }

//   // ...
// }

// // Doesn't work!
// let rabbit = new Rabbit("White Rabbit", 10); // Error: this is not defined.

//problem solved with super- parent empty new obj-this
// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }

//   // ...
// }

// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//   }

//   // ...
// }

// // now fine
// let rabbit = new Rabbit("White Rabbit", 10);
// console.log(rabbit.name); // White Rabbit
// console.log(rabbit.earLength); // 10

// overrid also class fields
//aber wierdo
// class Animal {
//   name = "animal";

//   constructor() {
//     console.log(this.name); // (*)
//   }
// }

// class Rabbit extends Animal {
//   name = "rabbit";
// }

// new Animal(); // animal
// new Rabbit(); // animal

// //vergleich
// class Animal {
//   showName() {
//     // instead of this.name = 'animal'
//     console.log("animal");
//   }

//   constructor() {
//     this.showName(); // instead of alert(this.name);
//   }
// }

// class Rabbit extends Animal {
//   showName() {
//     console.log("rabbit");
//   }
// }

// new Animal(); // animal
// new Rabbit(); // rabbit

//background work of super
// let animal = {
//   name: "Animal",
//   eat() {
//     console.log(`${this.name} eats.`);
//   },
// };

// let rabbit = {
//   __proto__: animal,
//   name: "Rabbit",
//   eat() {
//     // that's how super.eat() could presumably work
//     this.__proto__.eat.call(this); // (*)
//   },
// };

// rabbit.eat(); // Rabbit eats.

/// deeper obj hinzufügen
// let animal = {
//   name: "Animal",
//   eat() {
//     console.log(`${this.name} eats.`);
//   },
// };

// let rabbit = {
//   __proto__: animal,
//   eat() {
//     // ...bounce around rabbit-style and call parent (animal) method
//     this.__proto__.eat.call(this); // (*)
//   },
// };

// let longEar = {
//   __proto__: rabbit,
//   eat() {
//     // ...do something with long ears and call parent (rabbit) method
//     this.__proto__.eat.call(this); // (**)
//   },
// };

// longEar.eat(); // Error: Maximum call stack size exceeded

// //homeobject to solve this problem
// let animal = {
//   name: "Animal",
//   eat() {
//     // animal.eat.[[HomeObject]] == animal
//     console.log(`${this.name} eats.`);
//   },
// };

// let rabbit = {
//   __proto__: animal,
//   name: "Rabbit",
//   eat() {
//     // rabbit.eat.[[HomeObject]] == rabbit
//     super.eat();
//   },
// };

// let longEar = {
//   __proto__: rabbit,
//   name: "Long Ear",
//   eat() {
//     // longEar.eat.[[HomeObject]] == longEar
//     super.eat();
//   },
// };

// // works correctly
// longEar.eat(); // Long Ear eats.

//wrong super demo
// let animal = {
//   sayHi() {
//     console.log(`I'm an animal`);
//   },
// };

// // rabbit inherits from animal
// let rabbit = {
//   __proto__: animal,
//   sayHi() {
//     super.sayHi();
//   },
// };

// let plant = {
//   sayHi() {
//     console.log("I'm a plant");
//   },
// };

// // tree inherits from plant
// let tree = {
//   __proto__: plant,
//   sayHi: rabbit.sayHi, // (*)
// };

// tree.sayHi(); // I'm an animal (?!?)

//error- methods not function properties
// let animal = {
//   eat: function () {
//     // intentionally writing like this instead of eat() {...
//     // ...
//   },
// };

// let rabbit = {
//   __proto__: animal,
//   eat: function () {
//     super.eat();
//   },
// };

// rabbit.eat(); // Error calling super (because there's no [[HomeObject]])
// // SyntaxError: 'super' keyword unexpected here

//task1
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("White Rabbit"); // White Rabbit
// console.log(rabbit.name);

//task2
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

// let clock = new Clock({
//   template: "h:m:s",
// });
// clock.start();

/* Your class should work like this: */
//meine Lösung
class ExtendedClock extends Clock {
  sttop() {
    this.precision = precision;
    setInterval(() => super.render(), this.precision);
  }
}

let lowResolutionClock = new ExtendedClock({
  template: "h:m:s",
  precision: 10000,
});

lowResolutionClock.start();

//lösung
class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}
