"use strict";
// //* const nums : number[] = [1,2,4];
const u1 = {
    firstName: 'suvesh',
    lastName: "pandey",
    age: 19
};
const u2 = {
    firstName: 'sameer',
    lastName: "pandey",
    age: 16
};
const u3 = {
    firstName: 'jyoti',
    lastName: "pandey",
    age: 21
};
let users = [u1, u2, u3];
let newUsers = [];
for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
        newUsers.push(users[i]);
    }
}
for (let i = 0; i < newUsers.length; i++) {
    console.log(newUsers[i].firstName + ", ");
}
