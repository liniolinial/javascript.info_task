// logical operator /or
// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

// //NOT
// alert( !true ); // false
// alert( !0 ); // true

// //Task 1.what's the result of OR`?
// alert( null || 2 || undefined );  // check first true value 
// // null= false, 2 = true, undefined = false    -> 2

//Task2. what's the result of ORed alerts?
// alert(alert(1) || 2 || alert(3));
//Task check range between
// let ageCheck = prompt('Enter your age please.', Number(''));

// if(14 <= ageCheck <= 90){
//     alert('Welcome');
// } else if(ageCheck < 14 && ageCheck > 90){
//     alert('Sorry, you are uninvited.');
// } else{
//     alert('error');
// }

let login = prompt('Whose there?','');

if(login == 'Admin'){
    let password = prompt('Password?','');
    if(password == 'TheMaster'){
        alert('Welcome!');
    } else if(password == '' || password.key === 'Escape'){
        alert('Canceled');
    } else{
        alert('Wrong password');
    }
} else if (login == '' || login.key === 'Escape'){
    alert('canceled');
} else{
    alert("I don't know you.");
}