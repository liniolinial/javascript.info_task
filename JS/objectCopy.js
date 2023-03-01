// let message = 'Hello';
// let phrase = message;
// let more = message;
// let variation = more;
// alert(variation);

// let a = {};
// let b = {};
// alert (a[key] === b[key]);   //in brackets geht nicht

// let user = { name: "John" };
// let admin = { name: "Admin" };

// // use the same function in two objects
// admin.f = sayHi;

// // these calls have different this
// // "this" inside the function is the object "before the dot
// admin['f']();

// let user = {
//     firstName: "Ilya",
//     sayHi() {
//       let arrow = () => alert(this.firstName);
//       arrow();
//     }
//   };

// let caculator ={
//     read(){
//         prompt('Please enter two numbers.', 'a', 'b');
//     },
//     if()
        
//     }
// }
let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
     prompt('This calculator show first addition and than multiplication', 'start!');
      this.a = +prompt('first number a?', 0);
      this.b = +prompt('second number b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );


let ladder = {
    step:0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        // return this;
    },
    showStep(){
        alert(this.step);
        // return this;
    },
};
ladder.up().up().down().showStep().down().showStep();