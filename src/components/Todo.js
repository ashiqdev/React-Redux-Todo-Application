import React from 'react';
import useEditState from '../hooks/useEditState';
import EditTodoForm from './EditTodoForm';
import { TiEdit, TiDelete } from 'react-icons/ti';
// import { toggleTodoAction, removeTodoAction } from '../store/action/actions';
import {toggleTodo, deleteTodo} from '../store/reducer/todoReducer';
import { useDispatch } from 'react-redux';

const Todo = ({ todo }) => {
  const [isEdit, toggle] = useEditState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <li className='listItem'>
      {isEdit ? (
        <EditTodoForm toggle={toggle} todo={todo} />
      ) : (
        <div className='round'>
          <input
            type='checkbox'
            id={`checkbox ${todo.id}`}
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <label htmlFor={`checkbox ${todo.id}`}></label>

          <div className='update-delete'>
            <div
              className={`todo__task ${todo.completed ? 'done' : 'notDone'} `}
            >
              {todo.task}
            </div>
            <div className='icon icon-edit' onClick={toggle}>
              <TiEdit />
            </div>
            <div
              className='icon icon-delete'
              onClick={() => handleDelete(todo.id)}
            >
              <TiDelete />
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default Todo;
