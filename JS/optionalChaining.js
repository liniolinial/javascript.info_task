let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined

delete user?.name; // delete user.name if user exists

let id = Symbol.for('id');
let idAgain = Symbol.for('id');
