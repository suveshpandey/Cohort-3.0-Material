import { useRef, useState } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet, useSearchParams } from 'react-router-dom';

function App() {
  const [currCount, setCurrCount] = useState(0);
  const timer = useRef();
  function startClock(){
    let value = setInterval(function(){
      setCurrCount(currCount => currCount + 1);
    }, 1000);
    timer.current = value;
  }
  function stopClock(){
    clearInterval(timer.current);
  }
  return(
    <div>
      <div>{currCount}</div><br></br>
      <button onClick={startClock}>start</button>
      <button onClick={stopClock}>stop</button>
    </div>
  )

}














function Layout(){
  return(
    <div>
      <Header />
      <Outlet />
      <div>Footer</div>
    </div>
  )
}
function Header(){
  return(
    <div>
      <Link to={"/"}>home</Link>
      <Link to={"/neet/online-coaching-class-11"}>class11</Link>
      <Link to={"/neet/online-coaching-class-12"}>class12</Link>
    </div>
  )
}
function Landing(){
  return <div>
    Welcome to allen.
  </div>
}
function Class11Program(){
  const navigate = useNavigate();
  function redirectUser(){
    navigate("/")
  }
  return <div>
    NEET programs for class 11th.
    <button onClick={redirectUser}>Go to homepage</button>
  </div>
}
function Class12Program(){
  return <div>
    NEET programs for class 12th.
  </div>
}
function ErrorPage(){
  const navigate = useNavigate();
  function redirectUser(){
    navigate("")
  }
  return <div>
    sorry, page not found.
    <button onClick={redirectUser}>Go Home</button>
  </div>
}

export default App

//* note -> to be able to use BrowderRouter and all, we need to install -> npm install react-router-dom