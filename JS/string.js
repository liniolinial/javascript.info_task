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

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
// }

// function truncate(str, maxlength) {
//     if(str.length > maxlength){
//        return alert(str.slice(0, maxlength - 1) + '…');
//     } else{
//         return alert(str);
//     }
// }
// truncate("What I'd like to tell on this topic is:", 20);

// function extractCurrencyValue(string){
//     return string.slice(0) === string.slice(1); 

// }
function extractCurrencyValue(string){
    return +string.slice(1); 

}
console.log(extractCurrencyValue('$120')===120);
