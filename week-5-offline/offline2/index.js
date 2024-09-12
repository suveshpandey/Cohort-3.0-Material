// function main(){
//     fetch("https://chatgpt.com/c/66e2c682-54cc-8003-b475-b3f96380d5ab")
//     .then(async response =>{
//         const json = await response.text();
//         console.log(json)
//     })
// }
// main();

//? Same thing done, but slightly cleaner syntaxt.
async function main(){
    const response = await fetch("https://app.100xdevs.com/courses/14/475/478");
    const data = await response.text();
    console.log(data)
}
main();
