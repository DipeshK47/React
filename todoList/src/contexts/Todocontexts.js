import { createContext, useContext } from "react";

export const Todocontext = createContext({
    todos: [
        {
            id: 1,
            todo: 'To do msg',
            completed: false,
        }
    ], 
   addTodo: (todo) => {},
   updatedTodo: (id, Todo) => {},
   deleteTodo: (id) => {},
   toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(Todocontext)
}

export const TodoProvider = Todocontext.Provider