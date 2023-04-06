// function showMessage(from, text = "no text given") { //no text givin = default value(wenn text nicht gegeben ist.)
//     alert( from + ": " + text );
//   }
  
//   showMessage("Ann"); // Ann: no text given
//   showMessage("Ann", undefined);
//   showMessage("Ann", 'yes'); // Ann: yes

// function showMessage(from, text = anotherFunction()){

// }
// //without if
// //using ?
// let checkAge = (age > 18) ? true : confirm('Did parents allow you?');

// //using OR
// function checkAge(age) {
//   return (age > 18) || confirm('Did parents allow you?');
// }

function min (a,b){
  if (a < b){
    return a;
  } else if (a > b){
    return b;
  } else{
    return a || b;
  }
}
min (4,7);

function pow(x,n){
  return Math.pow(x,n);
}
pow(4,100);


// change this functio to arrow function
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",  //question
  function() { alert("You agreed."); }, //yes
  function() { alert("You canceled the execution."); }  //no
);

//answer
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",  //question
  ()=>alert("You agreed."),   //yes
  ()=>alert("You canceled the execution.")  //no
);

//refactor long function into functions like this:
// here we add whiskey
for(let i = 0; i < 10; i++) {
  let drop = getWhiskey();
  smell(drop);
  add(drop, glass);
}

// here we add juice
for(let t = 0; t < 3; t++) {
  let tomato = getTomato();
  examine(tomato);
  let juice = press(tomato);
  add(juice, glass);
}

//make clean
getWhiskey(glass);
getTomato(glass);

//function in declaration
function getWhiskey(){
  for(let i = 0; i < 10; i++){
    let drop = getWhiskey();
  }
}

function getTomato(){
  for(let t = 0; t < 3; t++) {

  }
}