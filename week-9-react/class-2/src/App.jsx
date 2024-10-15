import { useEffect, useState } from 'react';
import './App.css'

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



//* Re-learning Cleanup, useEffect. Learning about dependency array.
function App() {
    const [count, setCount] = useState(0);
    function increaseCount(){
        setCount(count => count + 1);
    }
    return(
        <div>
            <Counter count={count}></Counter>
            <button onClick={increaseCount}>IncraseCount</button>
        </div>
    )
}
function Counter(props){
    useEffect(function(){
        console.log("mount");

        return function(){
            console.log("unmount")
        }
    }, []);
    useEffect(function(){
        console.log("count changed")
        return function(){
            console.log("cleanup inside second effect.")
        }
    }, [props.count])

    return <div>Counter {props.count}</div>
}
export default App;