const axios = require("axios");

async function main(){
    const response = await axios.get("https://app.100xdevs.com/courses/14/475/478");
    console.log(response);
    // console.log(response.data);  //! not working.
}
main();