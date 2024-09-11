// class Rectangle {
//     constructor(width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color = color; 
//     }



    
//     area() {
//         const area = this.width * this.height;
//             return area;
//     }
    
//     paint() {
//         console.log(`Painting with color ${this.color}`);
//     }
    
// }

// const rect = new Rectangle(2, 4, "red"); //instanciating
// const area = rect.area();
// console.log(`area = ${area}`);
// console.log(rect.paint());


// class Square{
//     constructor(side){
//         this.side = side;
//     }
//     areaSquare(side){
//         return side*side;
//     }
// }
// const sq = new Square(10);
// console.log(sq.areaSquare());



// const now = new Date(); // Current date and time
// console.log(now.toISOString()); // Outputs the date in ISO format
// console.log(now.getFullYear())


// const map = new Map();
// map.set('name', 'Suvesh');
// map.set('age', 19);
// console.log(map.get('name'));
// console.log(map.get('age'));



// // settimeout
// function name(){
//     console.log("sp")
// }
// setTimeout(name, 2000);      //in name --- is coming bcz it is a keyward and js warns you as it might make some problem/controversy 



// //promise
// // A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// function setTimeoutPromisified(ms) {      //ms = milli seconds in this case
//     return new Promise(resolve => setTimeout(resolve, ms));        //new means an instance of Promise class
// }
    
// function callback() {
//     console.log("3 seconds have passed");
// }

// // setTimeout(callback, 2000);
// setTimeoutPromisified(3000).then(callback)

//line 70 and 71 do same thing but line 71 is syntactically cleaner.



// function setTimeoutPromisified(ms){
//     return new Promise(ms);
// }
// let x = setTimeoutPromisified(1110);
// console.log(x);




// function random(samosa){
//     // samosa();
//     setTimeout(samosa, 3000);
// }

// //p is instance of a Promise class
// let p = new Promise(random);      //supposed to return you something eventually

// //using the eventual value returned by the promise:-
// function callback(){
//     console.log("success")
// }
// p.then(callback)


//create primisified version of fs.readFile, fs.writeFile, fs.cleanFile



// const fs = require("fs");

// function readTheFile(sendTheFinalValueHere){
//     //do your thing and call this whenever you are done with that.
//     fs.readFile("/2.2 promises in js/a.txt", "utf-8", function(err, data){
//         sendTheFinalValueHere(data);
//     })
// }

// function readFile(fileName){
//     return new Promise(readTheFile);
// }
// const p = readFile();


// function callback(contents){
//     console.log("samosa");
// }
// p.then(callback);

// hw - create the promise class youself from scratch




// //my own promise, how to create your own promise
// function doAsyncOp(resolve){
//     setTimeout(resolve, 3000);    //old callback based ansync function
// }

// const p = new Promise(doAsyncOp);

// function callback(){
//     console.log("samosa")
// }
// p.then(callback);




function promiseFn(resolve){
    resolve("hye suvesh")
}

const p = new Promise(promiseFn) //defined the promise

function callback(str){
    console.log(str)
}
p.then(callback); //using the peomise