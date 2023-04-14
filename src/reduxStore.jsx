import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/todosSlice'
import filtersReducer from '../features/filters/filtersSlice'

const initialState = {
  myVariable: 0, // default value
};


export const store = configureStore({
    reducer: {
      todos: todosReducer,
      filters: filtersReducer
    }
})