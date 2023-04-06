//  function BigUser(){
//     this.name = "John";
//     return {
//         name: "Godzilla"
//     };
//  }
//  alert(new BigUser().name);

// let same = {};
// function A() { 
//     return same;
//  }
// function B() { 
//     return same;
//  }

// let a = new A();
// let b = new B();

// alert( a == b );

//calculator new function

// function Calculator(){
//     sum(){
//         this
//         this.a + this.b; 
//     }
//     mul(mul){
//         this.a * this.b;
//     }
//     read(read){
//         prompt('enter two number', 'start');
//         this.a = +prompt('first number', 0),
//         this.b = +prompt('second number', 0)
//     }
// }

// let calculator = new Calculator();
// calculator.read();
// alert("sum=" + calculator.sum());
// alert("mul=" + calculator.mul());


// function Calculator(){
//     this.sum = function(){
//         return this.a + this.b;
//     }
//     this.mul = function(){
//         return this.a * this.b;
//     }
//     this.read = function(){
//      this.a = +prompt('a?',0);
// 	    this.b = +prompt('b?',0);
// 	}
// }

// let calculator = new Calculator();
// calculator.read();
// alert("sum=" + calculator.sum());
// alert("mul=" + calculator.mul());



//create new Accumulator  -#1.
// function Accumulator(startingValue){
//     this.value = startingValue;
//     this.add = function(){
//         return this.value;
//      }
//     this.read = function(){
//         this.value = +prompt('this value be the current value.', 0);
//         this.value = +prompt('this value be the current value.', 0);
//     }
// }

// let accumulator = new Accumulator(1); // initial value 1
// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value
// alert(accumulator.value);


//create new Accumulator  -#2.
function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value += +prompt('this value be the current value.', 0);
    }
}

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
accumulator.read();
accumulator.read();
accumulator.read();
alert(accumulator.value);