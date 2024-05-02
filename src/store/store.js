import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../Features/todoSlice"
import AuthSlice from "../Features/AuthSlice"

export const Store = configureStore({
    reducer:{ 
       todo: todoReducer,
       Auth: AuthSlice,
    }
})