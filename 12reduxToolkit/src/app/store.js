import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todos/todoSlice'

export const store = configureStore({
    reducer: todoReducer,
});
// this export will be used for wrapping templates for provider