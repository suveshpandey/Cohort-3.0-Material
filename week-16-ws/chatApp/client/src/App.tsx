import { BsSendFill } from "react-icons/bs";
import { MessageBlock } from "./components/MessageBlock";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  return (
    <div className='h-screen w-[100%] bg-[#0d1b2a] flex justify-center items-center py-2 '>
      <div className='sm:w-[50%] w-[100%] h-[100%] border-2 border-slate-600 mx-auto grid grid-rows-[90%_auto] '>
        
        <div className='text-white py-2 px-3 flex flex-col h-auto overflow-y-auto round overflow-hidden custom-scrollbar  '>
          <MessageBlock message="hi..." />
          <MessageBlock message="how are you?" />
          <MessageBlock message="what are you doing?" />
          <MessageBlock message="what are you doing?" />
          <MessageBlock message="what are you doing?" />
        </div>
        
        <div className=' border-2 border-slate-500 mx-1 h-[60px] rounded-md grid grid-cols-[85%_auto] items-center'>
          <input type="text" className='px-3 text-lg rounded-md text-white outline-none ' placeholder='write your message...' />
          <button className=' h-[80%] flex items-center justify-center border-l-2 border-l- border-[#778da9] '><BsSendFill className="text-2xl text-gray-400 hover:text-gray-300 transition-all duration-200 " /></button>
        </div>
      
      </div>
    </div>
  )
}

export default App
