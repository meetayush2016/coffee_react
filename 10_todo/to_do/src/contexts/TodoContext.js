// importing context from react 

import { createContext , useContext } from "react";

//exporitng context from this fine 

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo:"Todo msg",
            completed: false, 
        }
    ],
    addTodo: (todo) =>{}, 
    updatedTodo:(id,todo)=> {},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{} 

})


//exporting a hook 
export const useTodo = ()=>{
    return useContext(TodoContext)
}

//exporting a provider

export const Todoprovider = TodoContext.Provider; 


