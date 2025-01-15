interface UserType {
    name : string,
    age : number
}
const user : UserType = {
    name : "suvesh",
    age : 19
};
function info(user : UserType){
    console.log(`hi ${user.name}, your age is ${user.age}.`);
};
info(user);
