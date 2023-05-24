// // protecting waterAmount
// //simple coffe maschine class
// class CoffeeMachine {
//   waterAmount = 0; // the amount of water inside

//   constructor(power) {
//     this.power = power;
//     console.log(`Created a coffee-machine, power: ${power}`);
//   }
// }

// // create the coffee machine
// let coffeeMachine = new CoffeeMachine(100);

// // add water
// coffeeMachine.waterAmount = 200;

// // to give more control to this code
// class CoffeeMachine {
//   _waterAmount = 0;

//   set waterAmount(value) {
//     if (value < 0) {
//       value = 0;
//     }
//     this._waterAmount = value;
//   }

//   get waterAmount() {
//     return this._waterAmount;
//   }

//   constructor(power) {
//     this._power = power;
//   }
// }

// // create the coffee machine
// let coffeeMachine = new CoffeeMachine(100);

// // add water
// coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10
// console.log(coffeeMachine.waterAmount);
// coffeeMachine.waterAmount = 200;

// //read only power
// class CoffeeMachine {
//   // ...

//   constructor(power) {
//     this._power = power;
//   }

//   get power() {
//     return this._power;
//   }
// }

// // create the coffee machine
// let coffeeMachine = new CoffeeMachine(100);

// console.log(`Power is: ${coffeeMachine.power}W`); // Power is: 100W
// coffeeMachine.power = 25;
// console.log(coffeeMachine.power); // Error (no setter) //100

// // getter/setter functions
// class CoffeeMachine {
//   _waterAmount = 0;

//   setWaterAmount(value) {
//     if (value < 0) value = 0;
//     this._waterAmount = value;
//   }

//   getWaterAmount() {
//     return this._waterAmount;
//   }
// }

// new CoffeeMachine().setWaterAmount(100);
// let coffeeMachine = new CoffeeMachine(100);

// coffeeMachine.power = 25;
// console.log(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

// console.log(coffeeMachine.power); // 25

// // private waterLimit
// class CoffeeMachine {
//   #waterLimit = 200;

//   #fixWaterAmount(value) {
//     if (value < 0) return 0;
//     if (value > this.#waterLimit) return this.#waterLimit;
//   }

//   setWaterAmount(value) {
//     this.#waterLimit = this.#fixWaterAmount(value);
//   }
// }

// let coffeeMachine = new CoffeeMachine();

// // can't access privates from outside of the class
// coffeeMachine.#fixWaterAmount(123); // Error
// coffeeMachine.#waterLimit = 1000; // Error

//both private #waterAmount and public waterAmount fields at the same time.
class CoffeeMachine {
  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) value = 0;
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
console.log(machine.#waterAmount); // Error
// SyntaxError: Private field '#waterAmount' must be declared in an enclosing class

//inheritance
class MegaCoffeeMachine extends CoffeeMachine {
  method() {
    console.log(this.#waterAmount); // Error: can only access from CoffeeMachine
  }
}
