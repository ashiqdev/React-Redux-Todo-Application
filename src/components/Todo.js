import React from 'react';
import useEditState from '../hooks/useEditState';
import EditTodoForm from './EditTodoForm';
import { TiEdit, TiDelete } from 'react-icons/ti';

const Todo = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEdit, toggle] = useEditState(false);

  const handleDelete = (id) => {
    deleteTodo(id);
  };
  return (
    <li className='listItem'>
      {isEdit ? (
        <EditTodoForm editTodo={editTodo} toggle={toggle} todo={todo} />
      ) : (
        <div className='round'>
          <input
            type='checkbox'
            id={`checkbox ${todo.id}`}
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
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
            <div className='icon icon-delete' onClick={() => handleDelete(todo.id)}>
              <TiDelete />
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default Todo;
