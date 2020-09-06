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
