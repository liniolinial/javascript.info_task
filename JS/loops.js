// let i = 3;
// while (i) alert(i--);

// let sum = 0;
// while (true) {
//   let value = +prompt("Enter a number", '');
//   if (!value) break; // (*)
//   sum += value;
// }
// alert( 'Sum: ' + sum );


//which values get shown by the while loop
// let i = 0;
// while (++i < 5) alert(i);

// while (i++ < 5) alert(i);

//which values get shown by the for loop
// for (let i = 0; i < 5; ++i)
// alert(i);
// for (let i = 0; i < 5; i++)
// alert(i);

//even num in loop
// let i = 0;
// while(i++ <= 10){
//     if (i % 2 === 0){
//         alert(i);
//     }
// }

//Repeat until the input is correct
//my answer
// let i = 0;
while(true){
    let askNum = prompt('Input: number greater than 100', '');
    if(askNum == '' || askNum == 'full'){
        alert('Please enter a numeric value.');
    } else if(askNum < 100){
        alert('What was the question?');
    } else if(askNum > 100 || askNum == null){
        alert('good job!');
        break;
    } 
    i++;
}
// //javascriptinfo answer
// let num;
// do {
//     num = prompt('Enter a number greater than 100.', 0);
// } while(num <= 100 && num);

//prime number filter
// let primeNum;
// do{
//     primeNum = prompt('Enter a prime number.', 0);
// } while(primeNum % 1 == 0 && primeNum % primeNum == 0 && primeNum);

// let primeNum = 0;
// while(true){
//     let primeNum = prompt('Enter a prime number.', 0);
//     if(!(primeNum % 1 == 0 || primeNum % primeNum == 0)){
//         alert('try it again.');
//     } else if(primeNum %  1 == 0 && primeNum % primeNum == 0){
//         alert('good job!');
//         break;
//     }
//     i++;
// }


// let prime = prompt('Enter a prime number.', 0);
// for(let i = 0; i < n; i++){
//     if(!(prime % i == 0 && prime % 1 == 0)){
//         alert('try again');
//         continue;
//     } else if(prime % i == 0 && prime % 1 == 0){
//         break;
//     }
// }


let i = 2;
let prime = prompt('enter prime number',0);
while(true){
    if (prime % prime === 0 && prime % 1 === 0){
        alert('prim num');
        break;
    }
    i++;
}

// primeNum:
// for(let i = 0; i < n; i++){
//     for(let j = 0; j < n; j++){
//         let prime = prompt('Enter prime number.',0);
//         if(!(prime % prime == 0 && prime % 1 == 0)){
//             break primeNum;
//         }
//     }
// }

    let n = prompt('Enter Prime Num', 0);
    for(let i = 2; i<n; i++){
        if(!(i%i == 0 && i%1==0)){
        } else if(i%i == 0 && i%1==0){
            return true;
        }
    }