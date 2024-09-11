## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

Answer:-

const fs= require('fs');
let content = "hye, I have added thing using the fs.writeFile funtion as an assignment."
fs.writeFile('week-2-js/2.1-async-js/a.txt', content, function(err){
    if(err) console.log("some error occurred");
    else console.log("done!");
})