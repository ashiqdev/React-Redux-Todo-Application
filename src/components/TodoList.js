import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
  return (
    <ul className='todoList'>
      {todos?.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList; 
