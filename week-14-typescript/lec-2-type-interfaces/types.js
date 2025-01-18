"use strict";
// // interface User {     //here, we cannot do "union and intersection"
// //     name: string,
// //     age: number
// // }
const inputPerson = {
    name: "suvesh pandey",
    role: "admin",
    adminId: "123"
};
function greet(input) {
    console.log(`hi there, I am ${input.name}, my role is an ${input.role}`);
}
