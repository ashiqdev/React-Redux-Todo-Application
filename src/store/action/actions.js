import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
} from '../action/actionTypes';

export const addTodoAction = (task) => {
  return {
    type: ADD_TODO,
    payload: task,
  };
};

export const editTodoAction = (todo) => {
  return {
    type: EDIT_TODO,
    payload: todo,
  };
};

export const toggleTodoAction = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export const removeTodoAction = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
