// let a = 0b11111111;
// let b = 0o377;
// let c = 0xff;
// alert( a == b == c ); // false

// alert( num.toString(16) );  // ff
// alert( num.toString(2) );   // 11111111
// alert( 123456..toString(36) ); // 2n9c

// let num = 1.23456;
// alert( Math.round(num * 100) / 100 );

// let nuum = 12.34512;
// alert(nuum.toFixed(2)); //12.35
// let num = 12.34;
// alert( num.toFixed(5) );
// alert( 1e500 ); // Infinity
// alert(9999999999999999999); 
// alert ( Number.isNaN("str"/ 2) );

// Task
//1.sum numbers from the visitor
// let inputSum = {
//     sum () {
//         return this.a + this.b;
//     },
//     read() {
//         alert('enter two numbers and this will show you their sum.');
//         this.a = +prompt('first number?',0);
//         this.b = +prompt('second number?',0);
//     }
// };
// inputSum.read();
// alert(inputSum.sum());

//2.why 6.35.toFixed(1) == 6.3?
// alert( 1.35.toFixed(1) ); // 1.4
// alert( 6.35.toFixed(1) ); // 6.3

//3.repeat until the input is a number
//number = true, rest value=false    -> true while loop
// let readNumber = {
//     numeric(){
//         if(this.a == ''){
//             return;
//         }
//         return this.a;
//     },

//     read(){
//         prompt('this loop will be continued, until the input is number', 0);
//         this.a = +prompt('pleas enter the right numeric value', 0);
//     }
// }
// let i = 0;
// while(true){
//     let askNumericValue = prompt('Input?', 0);
//     if(askNumericValue == '' || askNumericValue == null){
//         break;
//     } else if(isNaN(askNumericValue)){
//         alert('Input should be numeric value');
//     } else if(!isNaN(askNumericValue)){
//         alert('good job!');
//         break;
//     } 
//     i++;
// }

//4. an occasional infinite loop
// alert(isFinite !== isNaN);  //false
// let i = 0;
// while (i < 11) {
//     i += 0.2;
//     if(i > 9.8 && i < 10.2) {   // i = 10
//         return alert(i);
//     }   

// }

//a random number from min to max

// function random(min, max) {
//     return Math.random() * (max - min) + min;
//   }
  
// alert(random(5.3, 8.5));

//a random number with floating point from min to max
// function randomInt (min, max){
//     if(isFinite(min && max)){
//         for(min <= i && i < max; i++;){
//             let i = min;
//         }
//     }
//     return Math.trunc(i + Math.random());
// }

function random(min, max) {
    let randomNumber;
  
    for (let i = 0; i < 1; i++) {
      randomNumber = Math.random() * (max - min) + min;
    }
  
    return randomNumber;
  }
  
  alert(random(3, 8));

//my version
// function randomInteger(min, max){
//     return Math.trunc(Math.random() * (max - min) + min);
// }

// alert(randomInteger(1, 5));

//mdn 
// function getRandomInt(min, max) {
//     min = Math.floor(min);
//     max = Math.ceil(max);
//     return Math.floor(Math.random() * (max - min) + min); 
// }
// alert(getRandomInt(1.9, 5.9));

// alert(Math.ceil(5.9));