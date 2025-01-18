"use strict";
// // interface Address {      //now after writing ? , the address became (optional), means no problem if use it or we not.
// //     city: string,
// //     state: string,
// //     pincode: number
// // }
// // interface User {
// //     name: string,
// //     age: number,
// //     address?: Address
// // }
// // const user : User = {
// //     name: "Suvesh",
// //     age: 19,
// //     address: {
// //         city: "satna",
// //         state: "mp",
// //         pincode: 485334
// //     }
// // }
// // //* see here, we haven't used address key, and yet this is working.
// // const user2 : User = {
// //     name: "sp",
// //     age: 21
// // }
// // function greet(user : User) : string {
// //     return `hi there ${user.name}, your age is ${user.age}`;
// // }
// // console.log(greet(user));
// // //!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // interface People {
// //     name: string,
// //     age: number,
// //     // greet: () => string
// //     greet(): string
// // }
// // let person : People = {
// //     name: "suvesh",
// //     age: 19,
// //     greet(){
// //         return "hi there"
// //     }
// // }
// // console.log(person.greet());
// //!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// //* implementing class by using interfaces
// interface User {
//     name: string,
//     age: number,
//     isUserLeagal(): boolean
// }
// class Manager implements User {
//     name: string;
//     age: number
//     constructor(name: string, age: number){    //we can make even more data members.
//         this.name = name;
//         this.age = age
//     }
//     isUserLeagal(){
//         return this.age > 18;
//     }
// }
// let m1 = new Manager("suvesh", 19);
// console.log(`${m1.name}, ${m1.age}, ${m1.isUserLeagal()}`)
