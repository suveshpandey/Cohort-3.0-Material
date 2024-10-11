import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      title: "solve dsa",
      des: "solve everyday",
      done: false
    }
  ])
  function addTodos(){
    let newArray = [];
    for(let i = 0; i<todos.length; i++){
      newArray.push(todos);
    }
    newArray.push(
      {
        title: "eat samosa",
        des: "from canteen",
        done: false
      }
    )
    setTodos(newArray);
  }
  return(
    <div>
      <input type="text" id="title" placeholder='Title' />
      <input type="text" id="des" placeholder='Description' />
      <button onClick={addTodos}>add todo</button>
      <br />
      {/* {JSON.stringify(todos)} */}

      {todos.map((todo) => (
        <Todo
        title={todo.title}
        des={todo.des}
        done={todo.done}
        ></Todo>
      ))}
    </div>
  )
}
function Todo(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.des}</h2>
      <h3>{props.done ? "task is done" : "not done"}</h3>
    </div>
  )
}

export default App;
