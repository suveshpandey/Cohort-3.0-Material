const { log } = require("console");

try{
    let a;
    console.log(a.length); 
    console.log("inside try block.");  
}
catch(e){
    console.log("inside catch block.");
}
console.log("last");