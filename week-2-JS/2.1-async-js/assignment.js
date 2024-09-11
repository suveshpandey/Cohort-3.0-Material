//try to create promisified version of - 
// 1:- setTimeOut
// 2:- FileSystem.readFile
// 3:- fetch



// 1:- setTimeOut

function promisifiedSetTimeOut(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const data = 'hello suvesh';
            resolve(data);
        }, 2000)
    });
}
promisifiedSetTimeOut()
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log("error occured: ", error);
    })

// 1- created a function promisifiedSetTimeOut, inside which, created a new promise, 
//    having a data = 'hello suvesh', and we are using resolve(data) which means there is no error,

// 2- now we calling the promisifiedSetTimeOut function, and promisifiedSetTimeOut.then(...) means, if the promise is fulfilled/resolved
//    therefore the data will get printed.




// 2:- FileSystem.readFile

const fs = require('fs');
const { resolve } = require('path');
function promisifiedReadFile(filename){
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if(err){
                reject("error: ", err);
            }
            else{
                resolve(data);
            }
        });
    });
};

promisifiedReadFile("./2.1 async js/a.txt")
.then(data =>{
    console.log(data);
})
.catch(err =>{
    console.log(err);
})




// 3:- fetch

fetch("https://projects.100xdevs.com/tracks/async-js-1/Asynchronous-Javascript--Callbacks-and-more-1")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log("error")
})