import { useState } from "react"


function App() {

  const [color , setColor] = useState("black")
  

  return (
    <>
    <div className="w-full h-screen duration-200 "
      style={{backgroundColor: color}}
    >
      <div className="bg-[#1f2937] fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  py-3">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-3 rounded-md">
          <button className=" flex flex-wrap justify-center gap-3 shadow-lg p-3 rounded-md"
          style={{backgroundColor:"red"}}
           onClick={()=> setColor("red")}>Red</button>
          <button className=" flex flex-wrap justify-center gap-3 shadow-lg p-3 rounded-md"
          style={{backgroundColor: "blue"}}
          onClick={()=> setColor("blue")}>Blue</button>
          <button className=" flex flex-wrap justify-center gap-3 shadow-lg  p-3 rounded-md"
          style={{backgroundColor:"green"}}
          onClick={()=> setColor("green")}>Green</button>
          
          
        </div>
      </div>

    </div>

      
    </>
  )
}

export default App
