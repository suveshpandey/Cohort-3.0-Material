import { useEffect, useRef, useState } from "react"

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();


  function sendMessage(){
    if(!socket) return;
    //@ts-ignore
    const message = inputRef.current.value;
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000");
    setSocket(ws);

    ws.onmessage = (event) => {
      alert(event.data);
    }
  }, [])

  return (
    <>
      <div>
        <input type="text" ref={inputRef} placeholder='draft your message...' />
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  )
}

export default App
