Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


## answer of 24 hours clock
// function clockFull(){
//     const now = new Date();

//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();

//     console.log(`${hours} : ${minutes} : ${seconds}`)
// }
// setInterval(clock, 1000);

## 12 hours
<!-- 
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
setInterval(clock12Hours, 1000); -->
