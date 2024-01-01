import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(15)

  
  let addValue = ()=>{
    
    counter = counter + 1 ; 
    if(counter<=20 ){
      setCounter(counter); 
    }
    
   }; 

  const decreaseValue = ()=>{
    if(counter>=0){
      setCounter(counter-1); 

    }
    
  } 
  
  return (
    <>
     <h1>React Project</h1>
     <h2>count : {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={decreaseValue}>Remove value</button>
     <h2>{counter}</h2>
    </>
  )
}

export default App
