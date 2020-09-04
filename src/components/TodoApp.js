import React, { useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Form from './Form';
import { useSelector} from 'react-redux';

const TodoApp = () => {
  // const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
  const [completed, setCompleted] = useState(null);

  const incompleteTasks = () => setCompleted(false);

  const completedTasks = () => setCompleted(true);

  const allTasks = () => setCompleted(null);

  const { todos } = useSelector((state) => state);

  const filteredTodos =
    completed !== null
      ? todos.filter((todo) => todo.completed === completed)
      : todos;

  const numberOfActiveTasks = todos.filter((todo) => todo.completed === false)
    .length;

  return (
    <div className='wrapper'>
      <Header
        incompleteTasks={incompleteTasks}
        completedTasks={completedTasks}
        allTasks={allTasks}
        numberOfActiveTasks={numberOfActiveTasks}
        completed={completed}
      />
      <Form/>
      <TodoList todos={filteredTodos} />
    </div>
  );
};

export default TodoApp;
