// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [counterVisible, setCounterVisible] = useState(true);

//   useEffect(function(){
//     setInterval(function(){
//       setCounterVisible(c => !c);
//     }, 5000)
//   }, [])

//   //* conditional rendering:- render my comp. sometimes(when a specific condition meets, otherwise dont't.)
//   return (
//     <div>
//       hi
//       {counterVisible ? <Counter></Counter> : null}
//       hlo

//     </div>
//   )
// }

// function Counter(){
//   const [count, setCount] = useState(0);

//   console.log("inside comp.")

//   //* setInterval(fn, time)
//   // setInterval(function(){
//   //   setCount(count+1);
//   // }, 1000);
//   //!calling setInterval strightForward, rises problems, ie -> our component gets render many many times, therefore we will use "useEffect" hook to avoid this.
//   useEffect(function(){
//     let clock = setInterval(function(){
//       setCount(count => count + 1);
//     }, 1000);
//   //stop the clock when the upper logic is unmounted.

//     return function(){
//       clearInterval(clock);
//     }
//   }, [])  //?[] is known as "dependecy array" here.

 
  

//   return <div>
//     <h1>{count}</h1>
//   </div>
// }



// export default App
''//1='1///3

//?  explaination od "dependect,"