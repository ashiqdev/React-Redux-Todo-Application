import React from 'react';
import useInputState from '../hooks/useInputState';
// import { editTodoAction } from '../store/action/actions';
import {editTodo} from '../store/reducer/todoReducer';
import { useDispatch } from 'react-redux';

const EditTodoForm = ({ todo, toggle }) => {
  const [value, handleChange, reset] = useInputState(todo.task);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo({ id: todo.id, task: value }));
    reset();
    toggle(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        autoFocus
        className='edit'
        onChange={handleChange}
        value={value}
      />
    </form>
  );
};

export default EditTodoForm;
