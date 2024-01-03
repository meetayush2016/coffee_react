import { useEffect, useState } from "react";
import { Todoprovider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos , setTodo] = useState([])

  const addTodo = (todo)=>{
    setTodo((prev)=>[...prev,{id:Date.now(),...todo}])
  }

  const updatedTodo = (id,todo)=>{
    setTodo((prev)=> prev.map((prevTodo)=>(prevTodo.id===id)?todo:prevTodo))
  }

  const deleteTodo = (id)=>{
    setTodo((prev)=> prev.filter((todo)=>todo.id!==id))
  }
  const toggleComplete = (id)=>{
    setTodo((prev)=>prev.map((prevTodo)=> prevTodo === id ?{...prevTodo, completed:!prevTodo.completed}:prevTodo))
  }


  useEffect(()=>{
    const todos  = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0) {
      setTodo(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])


  
  
  return (
  
    <Todoprovider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}  <TodoForm/></div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>{
              <div  key={todo.id}
              className="w-full">
                 <TodoForm todo={todo} />

              </div>
            })}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
