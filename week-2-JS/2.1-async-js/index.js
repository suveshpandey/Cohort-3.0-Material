// const fs = require('fs');

// function read(err, data){
//     if(err){
//         console.log("error occured");
//     }
//     else{
//         console.log(data);
//     }
// }
//reading files asynchronously
// const contents = fs.readFile("./2.1 async js/a.txt", "utf-8", read); //asynchronoulsy
// console.log(contents);

// const data = fs.readFile('./2.1 async js/b.txt', 'utf-8', read);   //asynchronoulsy
// console.log(data);

// console.log("done")

// in line 9 or 11 , we would not do something as read(), if readFileSync-  because if it is fn then it ignore the read() fn


// //setTimeOut
// function sp(){
//     console.log("suvesh pandey");
// }
// setTimeout(sp, 1000);
// let sum =0;
// for(let i = 0; i<10; i++){
//     sum += i;
// }
// console.log(sum);




// //call stack
// function first() {
//     console.log("First");
// }
// function second() {
//     first();
//     console.log("Second");
// }
// second();