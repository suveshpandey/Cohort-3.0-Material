// // interface User {     //here, we cannot do "union and intersection"
// //     name: string,
// //     age: number
// // }

// // //prity much same as interface, but has a few extra things.

// // type UserType = { //here, we can do "union and intersection"
// //     name: string,
// //     age: number,
// //     money: number
// // }

// type EmployeeType = {
//     name: string,
//     startDate: string
// }
// type ManagerType = {
//     name: string,
//     dpt: string
// }

// type TeamLeadType = EmployeeType & ManagerType

// const teamlead : TeamLeadType = {
//     name: "suvesh pandey",
//     startDate: "01 jan 2025",
//     dpt: "IT"
// }
// console.log(
//     `
//     ${teamlead.name},
//     ${teamlead.startDate},
//     ${teamlead.dpt}
//     `
// )

type UserType = {
    name: string,
    role: string,
    userId: string
}
type AdminType = {
    name: string,
    role: string,
    adminId: string
}

type InputType = UserType | AdminType;

const inputPerson : InputType = {
    name: "suvesh pandey",
    role: "admin",
    adminId: "123"
}
function greet(input: InputType) : void {
    console.log(`hi there, I am ${input.name}, my role is an ${input.role}`)
}