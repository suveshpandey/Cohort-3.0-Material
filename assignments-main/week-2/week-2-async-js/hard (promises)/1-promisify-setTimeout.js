/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("samosa")
        }, n*1000)
    })
}
wait(10);

module.exports = wait;
