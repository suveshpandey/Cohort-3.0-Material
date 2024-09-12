//? Arrow function

const sum = (a,b)=>{
    return a+b;
}
console.log(sum(2,3))

//? ----------
// app.get('/', (req, res)=>{
//     res.json({msg: "Samosa"});
// } )



//?~~~~~~~~~~~~~~~~~~~~~~~~
//normal
let nums = [1,2,3,4,5,6,7,8,9,10];
let ans = [];
for(let i = 0; i<nums.length; i++){
    if(nums[i]%2 == 0) ans.push(nums[i]);
}
console.log(ans)

//filter
const a = nums.filter((item)=>{
    return item%2 == 0;
})
console.log(a);

//map
let arr = [1,2,3,4,5,6,7,8,9,10];
function mapping(n){
    if(n%2 == 0) return n;
}
const b = arr.map(mapping);
console.log(b)



