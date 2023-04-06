// multiple if
let age = prompt ('age', 18);
let message =(age < 3)? 'Hi, baby!':
(age < 18) ? 'Hello!':
(age < 100) ? 'Greetings!':
'what an unusual age!';
alert(message);

// conditional if
let company = prompt('Which company created JavaScript?', '');
(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');

if(company == 'Netscape' || company == 'netscape'){
    alert('Right!');
} else{
    alert('wrong!');
}

// Task 2- the name of javascirpt
let officialNameOfJs = prompt('What is the  "official" name of JavaScript?', '');
if(officialNameOfJs == 'ECMAScript'){
    alert('Right!');
} else{
    alert("You don't know? ECMAScript!");
}

//Task 3-show the sign
let showSign = prompt('Please enter here any number.', Number(''));
if(showSign > 1){
    alert(1);
} else if(showSign < 0){
    alert(-1);
} else if(showSign == 0){
    alert(0);
} else{
    alert('Please enter just a numeric value. Alphabet is not allowed.')
    return;
}

//Task 4- write if into ?
let result = (a + b < 4) ? 'Below' : 'Over';
alert(result);

//Task 5 - rewrite if else into ?
let message2 = (login == 'Employee') ? 'Hello' :
(login == 'Director') ? 'Greetings':
(login == '') ? 'No login':
'';
alert(message2);