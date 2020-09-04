import React from 'react';
import UseInputState from '../hooks/useInputState';

const Form = ({ addTodo }) => {
  const [value, onChangeHandler, reset] = UseInputState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(value);
    reset();
  };
  return (
    <form className='form' onSubmit={onSubmitHandler}>
      <input
        className='form__box'
        type='text'
        onChange={onChangeHandler}
        value={value}
        placeholder='Enter a task...'
        required
      />
      <button className='form__button'>Add Task</button> 
    </form>
  );
};

export default Form;
