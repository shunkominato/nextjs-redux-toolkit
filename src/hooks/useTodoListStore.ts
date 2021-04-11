import { unwrapResult, ThunkDispatch, Action, EntityId } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import {
  TodoType,
  actions,
  selectors,
} from '../slices/todoListSlice';
import {
  actions as asyncActions,
  selectors as asyncSelectors,
} from '../slices/asyncTodoListSlice';

import {
  actions as asyncInstaActions,
  selectors as asyncInstaSelectors,
} from '../slices/instaSlice';

export const useTodoListStore = () => {
  const todoList = useSelector(selectors.todoListSelector);
  const isPending = useSelector(asyncSelectors.isPendingSelector);
  // const USD = useSelector(asyncInstaSelectors.instaSelector)
  const USD = useSelector((state: RootState) => state.asyncInsta.USD)

  const dispatch = useDispatch<ThunkDispatch<RootState, any, Action>>();

  const addTodo = useCallback(
    (args: string) => {
      dispatch(actions.addTodo(args));
    },
    [dispatch]
  );

  const updateTodo = useCallback(
    (args: TodoType) => {
      dispatch(actions.updateTodo(args));
    },
    [dispatch]
  );

  const delTodo = useCallback(
    (args: EntityId) => {
      dispatch(actions.delTodo(args));
    },
    [dispatch]
  );

  const asyncAddTodo = useCallback(
    (args: string) => {
      console.log(args)
      dispatch(asyncActions.asyncAddTodo(args))
        .then(unwrapResult)
        .then((payload) => addTodo(payload))
        .catch((payload) => console.error(payload));
    },
    [dispatch]
  );

  const asyncInstaThunk = useCallback(
    () => {
      console.log('hook')
      dispatch(asyncInstaActions.asyncInstaThunk('a'))
    },
    [dispatch]
  );

  return {
    addTodo,
    updateTodo,
    delTodo,
    asyncAddTodo,
    asyncInstaThunk,
    todoList,
    isPending,
    USD
  };
};
