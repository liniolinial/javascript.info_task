//string conversion
let value = true;   //boolean value: ture or false
alert(typeof value);

 value = String(value);
 alert(typeof value);

 //numeric conversion
 let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number

//Boolean conversion
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false