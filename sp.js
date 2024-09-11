// function clockFull(){
//     const now = new Date();

//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();

//     console.log(`${hours} : ${minutes} : ${seconds}`)
// }
// setInterval(clock, 1000);

function clock12Hours(){
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let hours12 = hours%12;
    if(hours12 == 0) hours12 = 12;

    let ampm;
    if(hours >= 12) ampm = 'PM';
    else ampm = 'AM';

    console.log(`${hours12} : ${minutes} : ${seconds} ${ampm}`)
}
setInterval(clock12Hours, 1000);