import { combineReducers } from "redux";
import asyncTodoListSlice from "../slices/asyncTodoListSlice";
import todoListReducer from "../slices/todoListSlice";
import asyncInstaSlice from "../slices/instaSlice";
import productSlice from "../slices/productSlice";

export const rootReducer = combineReducers({
  asyncTodoList: asyncTodoListSlice,
  todoList: todoListReducer,
  asyncInsta: asyncInstaSlice,
  product: productSlice
});

export type RootState = ReturnType<typeof rootReducer>;
