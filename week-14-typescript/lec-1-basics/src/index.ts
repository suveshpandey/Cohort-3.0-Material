//? js syntax
// let  x = 1;  //* this code will also run well, ts infered that it is 1 therefore it might be a number.
// console.log(x);   //* this is known as { type inferencing }

//? typescript syntax
// let x: number = 10;
// console.log(x);

function greet(name: string){
    console.log("Hello " + name);
}
greet("suvesh");

function add(x: number, y: number){
    return x+y;
}
console.log(add(2,3));

// function add(x: number, y: string){ //? output = 23 , just like js. This is known as type-inferencing
//     return x+y;
// }
// console.log(add(2,"3"));

// function checkIsLegel(age: number){ //* in this, the function is inferring the output as a boolean value (inplicitly)itself.
//     if(age >= 18) return true;
//     else return false;
// }

// function checkIsLegel(age: number): boolean{   //* in this, we are telling the function that the output is a boolean value.
//     if(age >= 18) return true;
//     else return false;
// }
// console.log(checkIsLegel(18));


//? function as a parameter to another function
//*ex-1
// function fn(x: number){
//     // console.log("function call");
//     return x;
// }
// function delayedCall(fn: ()=>number){
//     setTimeout(fn, 3000);
// }
// delayedCall(() => fn(10));

//*ex-2
function greet2(name: string){
    console.log("Hello " + name);
}
function delayedCall(fn: (name: string)=> void){
    setTimeout(fn, 3000)
}
// delayedCall(() => greet2("suvesh")); ////or
delayedCall(greet);    // no -> wrong -> this gives undefined name



//* interfaces
function greet3(user: {
    name: string,
    age: number
}){
    console.log("Hello " + user.name + ", your age is - " + user.age);
}
const user = {   //this is something like an interface (not exactly it is, the actual thing is just below), because this does not have a fixed type, like, string, number, boolean, etc.
    name: "Suvesh",
    age: 19
}
greet3(user);

//* actual "Interface" thing:-
interface userType {  //!interface
    name: string,
    age: number
}
function greet4(user: userType){
    console.log("Namaste " + user.name + ", your age is - " + user.age);
}
const user2 = {
    name: "Suvesh2",
    age: 19
}

greet4(user2);
//? note that this is very clean code as compare to the previous one.


//* types -> Very similar to interfaces , types let you aggregate data together.
type User = {
	firstName: string;
	lastName: string;
	age: number
}
//? this is to very same as as the interfaces, but types lets you do do few other things.
//? like -> unioins, intersections

//* example:
type idType = string | number;  //this is known as union
function printId(id : idType){
    console.log("id - ", id);
}
printId(10);
printId("21");

//* example:
type Employee = {
    name: string,
    age: number
}
type Manager = {
    name: string
    department : string
}
type TeamLead = Employee & Manager

const teamLead: TeamLead = {
    name: "Suvesh Pandey",
    age: 19,
    department: "IT"
}
console.log(teamLead)

//! note - in interface, we don't use =, but in types we use it.