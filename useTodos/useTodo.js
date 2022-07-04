import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

    // const initialState = [];

    const init = () => {
        return JSON.parse( localStorage.getItem('todos')) || [];
    }

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init )

    useEffect( () => { localStorage.setItem( 'todos', JSON.stringify( todos )); }, [todos])
    
    const handleSubmit = ( todo ) => {
        const action = { type: 'Add ToDo', payload: todo }
        dispatch( action );
    }
    
    const handleDeleteTodo = ( id ) => {
        const action = { type: 'Remove ToDo', payload: id }
        dispatch( action );
    }

    const handleToggleTodo = ( id ) => {
        const action = {  type: 'Toggle ToDo', payload: id }
        dispatch( action );
    }

  return {
    todos,
    handleSubmit,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter( todo  => !todo.done).length
  }

}


// [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar piedra del alma',
    //     done: false
    
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar piedra del tiempo',
    //     done: false
    
    // }
// ]
