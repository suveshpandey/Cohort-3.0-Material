import React from "react";
// function App() {

//   return (
//     <div>
//       <Card>
//         <div style={{padding: 10, width: 300, backgroundColor: "#7ed6df", borderRadius: 10, margin: 10}}>Samosa khana hai...</div>
//       </Card>
//       <Card>
//         <div style={{padding: 10, width: 300, backgroundColor: "#34ace0", borderRadius: 10, margin: 10}}>Fulki khana hai...</div>
//       </Card>
//     </div>
//   )
// }

// function Card({children}){
//   return(
//     <div style={{display: "flex", flex:"column", backgroundColor: "#c7ecee", borderRadius: 10, color: "white"}}>
//       {children}
//     </div>
//   )
// }


//? error boundary :
function App(){
  return(
    <>
      <ErrorBoundary>
        <Card1 />
      </ErrorBoundary>
      <Card2 />
    </>
  )
}
function Card1(){
  throw new Error("Error while rerendering.");

  return(
    <div style={{padding: 10, width: 300, backgroundColor: "#7ed6df", borderRadius: 10, margin: 10}}>Samosa khana hai...</div>
  )
}
function Card2(){
  return(
    <div style={{padding: 10, width: 300, backgroundColor: "#7ed6df", borderRadius: 10, margin: 10}}>Fulki khana hai...</div>
  )
}
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <div style={{padding: 10, width: 300, backgroundColor: "orange", borderRadius: 10, margin: 10}}>Something went wrong.</div>
        }

        return this.props.children; 
    }
}


export default App;