import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: "drink milk in morning"},]
}

// step one: createSlice syntax is an object of name, initialState, reducers :{key: function}
// slice/reducer:
export const todoSlice = createSlice(
    {
        name: 'todo',
        initialState,
        reducers: {
            // properties and functions
            // unlike context api, you declare props here only

            addTodo: (state, action)=> {         // theres two params for this function, state and action
                const todo = {
                    id: nanoid() ,
                    text: action.payload          // payload is used to collect info from values of props
                }
                state.todos.push(todo);
            },  
            removeTodo: (state, action)=> {
                state.todos = state.todos.filter(todo=> (todo.id !== action.payload))
            },
        },
    }
)

 // step two: export individual functionality
 // Export action
export const { addTodo, removeTodo } = todoSlice.actions;

// step three: export main source export to import into store
// Export reducer
export default todoSlice.reducer;
