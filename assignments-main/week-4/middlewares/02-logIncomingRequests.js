//  Create a middleware that logs all incoming requests to the console.

const express = require('express');
const app = express();

let reqCount = 0;
function logRequests(req, res, next) {
    reqCount++;
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const sec = time.getSeconds();

    // write the logic for request log here
    console.log(`${reqCount} count requst came at ${hour}:${minute}:${sec}`);
    next();
}

app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

app.listen(3000, ()=> console.log("server started..."))

module.exports = app;
