/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

// Define three functions that return promises resolving after t1, t2, and t3 seconds.
function delay(t) {
    return new Promise(resolve => setTimeout(resolve, t * 1000));
}

function function1() {
    return delay(1); // Resolve after 1 second
}

function function2() {
    return delay(2); // Resolve after 2 seconds
}

function function3() {
    return delay(3); // Resolve after 3 seconds
}

// Define a function to call these functions sequentially and measure the time taken.
async function sequentialExecution() {
    const start = Date.now();
    
    await function1();
    await function2();
    await function3();
    
    const end = Date.now();
    return end - start; // Time in milliseconds
}

// Run the sequential execution and log the result.
sequentialExecution().then(timeTaken => {
    console.log(`Total time taken: ${timeTaken} milliseconds`);
}).catch(err => {
    console.error('Error:', err);
});


module.exports = calculateTime;
