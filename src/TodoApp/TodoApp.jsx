import React from 'react'
import {useSelector} from "react-redux"
import CreateTodo from '../Todo-Components/CreateTodo'
import Todos from '../Todo-Components/Todos'


function TodoApp() {
        const todos = useSelector(state=>state.todo.todos)
    return (
        <>
            <div className ='content-center justify-center my-6 p-2 flex flex-wrap'>
                <CreateTodo/>
                <div className = 'w-8/12 my-2 bg-transparent rounded-md'>
                      <h1 className = ' text-2xl text text-center'>Todos</h1>
                    <div>
                {todos.map((todo) => (<div key = {todo.id}><Todos todo = {todo}/></div>))}
                    </div>
                </div>
            </div>
        </>  
    )
}

export default TodoApp