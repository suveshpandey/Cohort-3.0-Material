import { useState } from 'react'
import './App.css'
import Otp from './components/Otp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-700 pt-44 pb-44 flex justify-center'>
      <Otp number={10}/>
    </div>
  )
}

export default App
