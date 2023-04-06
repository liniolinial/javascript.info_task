//exponentiation
alert(2**5);

//string concatenation
let s = "my" + "Bag";
alert(s);

//string& number concatenation
alert("1"+ 3);
alert(1 +3 );
alert(typeof 2 + 2 + '1' ); //

alert('1' + 2 + 2);

//binary plus
let apples = "2";
let oranges = "3";
//the binary plus concatenates strings
alert( apples + oranges ); // "23"
// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5
// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

//assignment return a value
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
alert( a ); // 3
alert( c ); // 0

//chaining assignment
let d, e, f;
d = e = f = 2 + 2;

alert(d);
alert(e);
alert(f);
//alle value von d,e,f sind 4

//modify
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14