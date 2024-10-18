// import { createContext, useState, useContext } from 'react'
// import './App.css'

// const BulbContext = createContext();

// function App() {

//   return(
//     <div>
//       <BulbProvider>
//         <LightBulb />
//         </BulbProvider>
      
//     </div>
//   )
// }
// function BulbProvider({children}){
//   const [isBulbOn, setIsBulbOn] = useState(true);

//   return(
//     <BulbContext.Provider value={{
//       isBulbOn: isBulbOn,
//       setIsBulbOn: setIsBulbOn
//     }}>
//       {children}
//     </BulbContext.Provider>
//   )
// }
// function LightBulb(){
//   return(
//     <>
//       <BulbState />
//       <BulbToggleState />
//     </>
//   )
// }
// function BulbState(){
//   const {isBulbOn} = useContext(BulbContext);
//   return(
//     <div>
//       {isBulbOn ? "Bulb on" : "Bulb off"}
//     </div>
//   )
// }
// function BulbToggleState(){
//   const {isBulbOn, setIsBulbOn} = useContext(BulbContext);
//   function toggleBulb(){
//     setIsBulbOn(!isBulbOn)
//   }
//   return(
//     <button onClick={toggleBulb}>Toggle Bulb</button>
//   )
// }
// export default App



import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;
