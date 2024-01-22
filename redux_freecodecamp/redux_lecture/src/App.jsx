import { useState } from 'react'
import { useSelector } from 'react-redux'

import './App.css'

function App() {
  const counter = useSelector((state)=> state.counter); 

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>


    </>
  )
}

export default App
