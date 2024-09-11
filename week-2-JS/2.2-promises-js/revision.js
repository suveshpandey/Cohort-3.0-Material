// const promise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("samosa");
//         resolve();
//     }, 2000)
// });

// promise1.then(function(){
//     console.log("promise done!")
// })
// .catch(function(){
//     console.log("error occured");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async task 2")
//         resolve();
//     }, 2000)
// }).then(function(){
//     console.log("done!")
// })


// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "suvesh", email: "sp@gmail.com"})
//     }, 1000)
// })
// promise3.then(function(user){
//     console.log(user);
// })


// const promise4 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "sp", pass: "sp298"})
//         }
//         else reject('ERROR: something went wrong')
//     }, 1000)
// })

// promise4  
// .then(function(user){
//     console.log(user);
//     return user.username;
// })
// .then(function(username){
//     console.log(username)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){
//     console.log("The promise is either resolved or rejected!")
// })

const p5 = new Promise(function(reject, resolve){
    setTimeout(function(){
        let error = true;

        if(!error){
            resolve({user: "sp", pass:"123"});
        }
        else reject('Error!');
    }, 1000)
})
async function consumeP(){
    try{
        const response = await p5 
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
consumeP();