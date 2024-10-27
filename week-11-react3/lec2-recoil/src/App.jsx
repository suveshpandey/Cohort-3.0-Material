import { useState } from 'react'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil'
import './App.css'
import { counterAtom } from './store/atoms/counter'
import { eventSelector, currentAtom } from './store/atoms/selector'

//* recoil thing starts
// function App() {

//   return (
//     <RecoilRoot>
//       <Counter />
//     </RecoilRoot>
//   )
// }
// function Counter(){
//   return <div>
//     <CurrentCount />
//     <Increase />
//     <Decrease />
//   </div>
// }
// function CurrentCount(){
//   const count = useRecoilValue(counterAtom);
//   return <div>{count}</div>
// }
// function Increase(){
//   const setCount = useSetRecoilState(counterAtom);
//   function increase(){
//     setCount(count => count + 1);
//   }
//   return <div>
//     <button onClick={increase}>increase</button>
//   </div>
// }
// function Decrease(){
//   const setCount = useSetRecoilState(counterAtom);
//   function decrease(){
//     setCount(count => count - 1);
//   }
//   return <div>
//     <button onClick={decrease}>Decrease</button>
//   </div>
// }
//* recoil thing starts


//? selector thing starts
// function App(){
//   return <div>
//     <RecoilRoot>
//       <Buttons />
//       <Counter />
//       <IsEven />
//     </RecoilRoot>
//   </div>
// }
// function Buttons(){
//   const setCount = useSetRecoilState(currentAtom);
//   function increase(){
//     setCount(c => c + 2);
//   }
//   function increase(){
//     setCount(c => c-1);
//   }
//   return <div>
//     <button onClick={increase}>increase</button>
//     <button onClick={decrease}>decrease</button>
//   </div>
// }
// function Counter(){
//   const count = useRecoilValue(currentAtom);
//   return <div>
//     {count}
//   </div>
// }
// function IsEven(){
//   const even = useRecoilValue(eventSelector);
//   return <div>
//     {even ? "Even" : "Odd"}
//   </div>
// }
//! not working


export default App
