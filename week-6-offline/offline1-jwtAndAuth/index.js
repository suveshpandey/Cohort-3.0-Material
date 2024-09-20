const jwt = require("jsonwebtoken");
const details = {
    name : "Suvesh",
    ac : 123
}
const token = jwt.sign(details, "secret");
// const decodedData = jwt.decode(token, "secret");
const verifiedData = jwt.verify(token, "secret");
console.log(token);
console.log()
console.log()
console.log(verifiedData);