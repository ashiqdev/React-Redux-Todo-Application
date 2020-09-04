import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
} from '../action/actionTypes';
import { v4 as uuid } from 'uuid';

const todoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, { id: uuid(), task: payload, completed: false }];

    case EDIT_TODO:
      const { id, task } = payload;

      return state.map((todo) =>
        todo.id === id ? { ...todo, task: task } : todo
      );

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload);
    default:
      return state;
  }
};

export default todoReducer;
