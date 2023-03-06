// let str = `Hello`;

// alert( str[0] ); // undefined
// alert( str.at(-2) ); // l

// alert( "Widget".startsWith("id") ); 


//task-uppercase the first character
// let ucFirst = 'john';
// function upperCase () {
//     alert(ucFirst[0].toUpperCase() + ucFirst.slice(1));
// }
// upperCase();

//task2-check for spam
// function checkSpam(str){
//     if(str.includes('viagra') || str.includes('XXX')){
//         return true;
        
//     } else{
//         return false;
//     }
// }

// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

// alert(checkSpam('skgjhkjs Viagra XXxX'));


//task3- truncate maxlength
// function truncate(str, maxlength){
//    let inputStr = str;
//    str = str.substr(0, maxlength) + '.' + str.at(-2);
//    alert(str);
// }

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}
truncate("What I'd like to tell on this topic is:", 20); //= "What I'd like to te…"
truncate("Hi everyone!", 20); //= "Hi everyone!"

// let inputStr = str[0], str[-1], str[-2];
// maxlength !== NaN;

// let inputStr = str;
// if(str.substr(0, maxlength)){
//      str = '.' + str[-1] + str[-2]+ str[-3];
// }

// let ss = "What I'd like to tell on this topic is";
// ss = '.' + ss[-2];
// alert (ss);
// let str = 'Hi kdlskgjeidjf';
// str = '.' + str.at(-4) + str;
// alert(str);