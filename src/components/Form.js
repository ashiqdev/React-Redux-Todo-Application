import React from 'react';
import UseInputState from '../hooks/useInputState';
// import { addTodoAction } from '../store/action/actions';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/reducer/todoReducer';

const Form = () => {
  const [value, onChangeHandler, reset] = UseInputState('');
  // const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
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
