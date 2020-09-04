import React, { useEffect } from 'react';
import Header from './Header';
import useTodoState from '../hooks/useTodoState';
import TodoList from './TodoList';
import Form from './Form';

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    completed,
    incompleteTasks,
    completedTasks,
    allTasks,
  } = useTodoState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos =
    completed !== null
      ? todos.filter((todo) => todo.completed === completed)
      : todos;

  const numberOfActiveTasks = todos.filter((todo) => todo.completed === false) 
    .length;

  return (
    <div className='wrapper'>
      <Header
        addTodo={addTodo}
        incompleteTasks={incompleteTasks}
        completedTasks={completedTasks}
        allTasks={allTasks}
        numberOfActiveTasks={numberOfActiveTasks}
        completed={completed}
      />
      <Form addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default TodoApp;
