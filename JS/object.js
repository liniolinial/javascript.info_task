//square brackets
// let user = {
//     name:"Mike",
//     age: 30
// };
// let key = prompt('What do you want to know about the user?', 'age');
// alert(user[key]);

//Computed properties
// let fruit = prompt("Which fruit to buy?","apple");
// let bag = {
//     [fruit]:5, //durch diese Linie wird das Value hier nochmal redeclariert.
// };
// alert(bag.apple); 

// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {};
// bag[fruit] = 5;

// let user ={
//     name: "John",
//     surname: "Smith"
// };
// user.age = 25;

// for (let prop in user){
//     alert(prop);
// }

// let user ={
//     name: "John",
//     surname:'Smith',
// }
// user.name = 'Pete';
// delete user.name;

// function isEmpty(obj){
//     for (let key in obj){
//         return false;
//     }
//     return true;
// }

// let salaries= {
//     John:100,
//     Ann:160,
//     Pete:130
// };

// let sum = 0;
// for(let key in salaries){
//     sum += salaries[key];
// }
// alert(sum);

let menu ={
    width:200,
    height: 300,
    title:"My menu"
};

function multiplyNumeric(obj){  
    for(let prop in obj){
        if(typeof obj[prop] == 'number'){
            obj[prop]*= 2;
        }
    }
    return obj;
}
multiplyNumeric(menu);
alert(`Width: ${menu.width}, Height: ${menu.height}, Title: ${menu.title}`);