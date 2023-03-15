// let arr = ["Apple", "Orange", "Pear"];
// alert (arr.length === 3);

// let fruits = [];
// fruits[123] = "Apple";
// alert( fruits.length );

// let arr = new Array(6);
// alert(arr.length);
// let test = new Array(test1, test2);
// alert(test);

//task 2
// let styles = ['Jazz', 'Blues'];
// styles.push('Rock-n-Roll');
// alert(styles);
// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// alert(styles);
// styles.shift();
// alert(styles);
// styles.unshift('Rap', 'Reggae');
// alert(styles);
// styles[i].push('Classics');

//task3
// let arr = ["a", "b"];
// arr.push(function() {
//   alert( this );
// });
// alert(arr[2]());

//task4
// function sumInput(){
//     let ask = [prompt('input should be a number.', 0)];
//     if(ask == parseFloat){
//         ask.push(function(){
//             ask + this.a;
//         });
//     } else if(ask == '' || ask == isNaN || ask == undefined){
//         return ask + ask.push(function(){
//             ask + this.a;
//         });
//     }
// }

// function sumInput(){
//     let ask = [];
//     while(true){
//         let input = prompt('enter a number:', 0);
//         if(input === ' ' || isNaN(input) || input === null){
//             break;
//         } else{
//             ask.push(parseFloat(input));
//         }
//     }
//     let sum = 0;
//     for(let num of ask){
//         sum += num;
//     }
//     return sum;
// }
// alert(sumInput());

function sumInput() {
  let ask = [];
  let input = 0;

  while (Number.isInteger(input)) {
    input = parseFloat(prompt("enter a number:", 0));
    // input = parseFloat(input);

    if (!isNaN(input)) {
      ask.push(input);
    }
  }

  let sum = 0;

  for (let num of ask) {
    sum += num;
  }

  return sum;
}
alert(sumInput());
//endlose schleife- geht nicht
//wei

// function getMaxSubSum(arr){
//     let arr = [];
//     let arr = new Arrays([]);
//     alert(arr.subarray(arr));
// }
// getMaxSubSum(1,5,6,-7,11,45);
