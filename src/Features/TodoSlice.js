import { createSlice, nanoid } from "@reduxjs/toolkit"



const initialState = {
    todos: [{ id: 1, text: "todo examople " }],


}


export const todoSlice = createSlice({

    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            console.log(action.payload.id)
            const findIndex = state.todos.findIndex((item) => item.id === action.payload.id);
            console.log(findIndex)
            if (findIndex != -1) {
                state.todos = state.todos.filter((item) => {
                   return  item.id != action.payload.id
                })
            }

        },
    }





})


export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer