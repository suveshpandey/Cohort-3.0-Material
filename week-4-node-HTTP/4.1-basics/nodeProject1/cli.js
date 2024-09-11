// const fs = require('fs');
// // function countText(){
    
// //     const data = fs.readFileSync('sp.txt', 'utf-8');
// //     let cnt = 0;
// //     // let newData = data.replace(/\s+/g, ""); // Remove all spaces
// //     for(let i = 0; i<data.length; i++){
// //         if(data[i] === " ") continue;
// //         else cnt++;
// //     }
// //     return cnt;
// // }
// function countWords(fileName){
//     fs.readFile(fileName, 'utf-8', (err, data)=>{
//         let cnt = 0;
//         // let newData = data.replace(/\s+/g, ""); // Remove all spaces
//         for(let i = 0; i<data.length; i++){
//             if(data[i] === " ") cnt++;
//         }
//         console.log(cnt+1);
//     })
// }
// countWords(process.argv[2]);


const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
    .name('counter')
    .description('CLI to do file based tasks')
    .version('0.8.0');

    program.command('count_words')
    .description('Count the number of words in a file')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let words = 0;
            for(let i = 0; i<data.length; i++){
                if(data[i] === " ") words++;
            }
            console.log(words+1);
        }
    });
});

program.parse();

// node cli.js count_words sp.txt //ise run karo