//Task
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a + b); // 12

// why 12:
// prompt fängt beide mit string an, daher erkennt compiler den Code als string.
//-> "1" + "2"  = "12"

//recieve 3
let a = prompt("First number?", 1);
a = 1;
let b = prompt("Second number?", 2);
b= 2;
alert(a + b); 

//preform
alert(+a + +b);