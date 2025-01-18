// //* const nums : number[] = [1,2,4];



// function getMax(nums: number[]){
//     let max = -1000;
//     for(let i = 0; i< nums.length; i++){
//         if(nums[i] > max) max = nums[i];
//     }
//     return max;
// }
// const mx = getMax([-1, 2, 3, 0, -4]);
// console.log(mx)


//? Given a list of users, filter out the users that are legal (greater than 18 years of age)
interface User {
	firstName: string;
	lastName: string;
	age: number;
}
const u1 : User = {
    firstName: 'suvesh',
    lastName: "pandey",
    age: 19
}
const u2 : User = {
    firstName: 'sameer',
    lastName: "pandey",
    age: 16
}
const u3 : User = {
    firstName: 'jyoti',
    lastName: "pandey",
    age: 21
}
let users : User[] = [u1, u2, u3];
let newUsers : User[] = [];
for(let i=  0; i<users.length; i++){
    if(users[i].age >= 18){
        newUsers.push(users[i]);
    }
}
for(let i = 0; i<newUsers.length; i++){
    console.log(newUsers[i].firstName + ", ")
}