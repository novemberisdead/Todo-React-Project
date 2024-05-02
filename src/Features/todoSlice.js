import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {

    todos: [{id:nanoid(),text : "Create your Todos!", }]

}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        createTodo : (state,action)=>{
            const todo = {id:nanoid(),text: action.payload,}
            state.todos.push(todo)
        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state,action)=>{
            const {newText} = action.payload
            const editTodo = state.todos.map((todo)=>todo.id=== action.payload.id)
            if (editTodo){
                return editTodo.text = newText
            }
        },
        todoComplete : (state,action)=>{
            state.todos.map((todo) => todo.id == action.payload)
        }
    }
})

export const {createTodo,removeTodo,updateTodo,todoComplete} = todoSlice.actions
export default todoSlice.reducer