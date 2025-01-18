"use strict";
// interface User {
//     id: string,
//     name: string,
//     email: string,
//     age: number,
//     password: string,
// }
// //? Pick api :-
// type UpdateUser = Pick<User, 'name' | 'age' | 'password'>;
// //? Partial api:-
// type OptionalDetails = Partial<UpdateUser>;
// function updateUser(userDetails: OptionalDetails){
//     userDetails.name = "newname",
//     userDetails.age = 10,
//     userDetails.password = "newpass"
// }
// interface User {
//     readonly name: string,
//     readonly age: number
// }
// const user: User = {
//     name: "suvesh",
//     age: 19
// }
// // user.name = "sp" //! not possible, because the values are readonly, we can only read, and cannot change.
//? Records:-
// type User = Record<string, {name: string, age: number}>; //simple
// const user: User = {
//     "id1": {name: "suvesh", age: 19},
//     'id2': {name: "sp", age: 21}
// }
//? map
const users = new Map();
users.set("id1", { name: "suvesh", age: 19 });
users.set("id2", { name: "sp", age: 18 });
console.log(users.get("id1"));
