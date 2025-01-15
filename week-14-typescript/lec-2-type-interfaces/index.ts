interface User {
    name: string,
    age: number,
    address: {
        city: string,
        state: string,
        pincode: number
    }
}
const user = {
    name: "Suvesh",
    age: 19,
    address: {
        city: "satna",
        state: "mp",
        pincode: 485334
    }
}
function greet(user : User) : string {
    return `hi there ${user.name}, your age is ${user.age}, and you live in ${user.address.city}`;
}
console.log(greet(user));