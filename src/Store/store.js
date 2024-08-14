import { configureStore } from "@reduxjs/toolkit"
import TodoReducer from "../Features/TodoSlice"

// !step 1
const Store = configureStore({

    reducer: {
        todo: TodoReducer
    }
})


export { Store }