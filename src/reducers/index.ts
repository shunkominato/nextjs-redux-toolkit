import { combineReducers } from 'redux'
import asyncTodoListSlice from '../slices/asyncTodoListSlice'
import todoListReducer from '../slices/todoListSlice'
import asyncInstaSlice from '../slices/instaSlice'

export const rootReducer = combineReducers({
  asyncTodoList: asyncTodoListSlice,
  todoList: todoListReducer,
  asyncInsta:  asyncInstaSlice

})

export type RootState = ReturnType<typeof rootReducer>
