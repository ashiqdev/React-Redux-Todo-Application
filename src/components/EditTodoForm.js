import React from 'react';
import useInputState from '../hooks/useInputState';

const EditTodoForm = ({ todo, editTodo, toggle }) => {
  const [value, handleChange, reset] = useInputState(todo.task);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(todo.id, value);
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
