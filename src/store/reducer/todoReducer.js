// import {
//   ADD_TODO,
//   DELETE_TODO,
//   EDIT_TODO,
//   TOGGLE_TODO,
// } from '../action/actionTypes';
// import { v4 as uuid } from 'uuid';

// const todoReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD_TODO:
//       return [...state, { id: uuid(), task: payload, completed: false }];

//     case EDIT_TODO:
//       const { id, task } = payload;

//       return state.map((todo) =>
//         todo.id === id ? { ...todo, task: task } : todo
//       );

//     case TOGGLE_TODO:
//       return state.map((todo) =>
//         todo.id === payload ? { ...todo, completed: !todo.completed } : todo
//       );

//     case DELETE_TODO:
//       return state.filter((todo) => todo.id !== payload);
//     default:
//       return state;
//   }
// };

// export default todoReducer;

import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const todoSlice = createSlice({
  name: 'todos',
  initialState: JSON.parse(window.localStorage.getItem('todos') || '[]'),
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: uuid(), task: action.payload, completed: false });
    },

    editTodo: (state, { payload }) => {
      const { id, task } = payload;
      return state.map((todo) => (todo.id === id ? { ...todo, task } : todo));
    },

    toggleTodo: (state, { payload }) => {
      return state.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );
    },

    deleteTodo: (state, { payload }) => {
      return state.filter((todo) => todo.id !== payload);
    },
  },
});

export const { addTodo, editTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
