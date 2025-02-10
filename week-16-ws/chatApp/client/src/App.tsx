import { BsSendFill } from "react-icons/bs";
import { MessageBlock } from "./components/MessageBlock";
import React, { useEffect, useRef, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>(["hye there...", "I am suvesh pandey" ]);
  const wsRef = useRef();


  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event) => {
      const newMessage = event.data;
      setMessages(m => [...m, newMessage]);
    }
    wsRef.current = ws;
    ws.onopen = () => {
      ws.send(JSON.stringify(
        {
          type: "join",
          payload: {
            roomId: "123"
          }
        }
      ))
    }
    return () => {
      ws.close();
    }
  }, []);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  }
  const handleAddMessage = () => {
    wsRef.current.send(JSON.stringify({
      type: "chat",
      payload: {
        message: message
      }
    }))

    // setMessages([...messages, message]);
    setMessage("");
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key == "Enter"){
      event.preventDefault();
      handleAddMessage();
    }
  }

  return (
    <div className='h-screen w-[100%] bg-[#0d1b2a] flex justify-center items-center'>
      <div className='sm:w-[50%] w-[100%] h-screen border-2 border-slate-600 mx-auto grid grid-rows-[90%_auto] '>
        
        <div className='text-white mb-3 py-2 px-3 place-content-end round overflow-y-scroll custom-scrollbar  '>
          {messages.length > 0 &&
            (
              messages.map((message, index) => (
                <MessageBlock key={index} message={message} />
              ))
            )
          }
        </div>

        <div className=' border-2 border-slate-500 mx-1 h-[60px] rounded-md grid grid-cols-[85%_auto] items-center'>
          
          <input 
            type="text"
            name="messageInput"
            id="message"
            value={message}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className='px-3 text-lg rounded-md text-white outline-none ' placeholder='write your message...' 
          />
          
          
          <button 
            onClick={handleAddMessage}
            className=' h-[80%] flex items-center justify-center border-l-2 border-l- border-[#778da9] '>
              <BsSendFill className="text-2xl text-gray-400 hover:text-gray-300 transition-all duration-200 " 
              />
          </button>
        
        </div>
      </div>
    </div>
  )
}

export default App
