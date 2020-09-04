import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const useTodoState = (initialValue) => {
  const [todos, setTodos] = useState(initialValue);

  const [completed, setCompleted] = useState(null);

  const incompleteTasks = () => setCompleted(false);

  const completedTasks = () => setCompleted(true);

  const allTasks = () => setCompleted(null);

  const addTodo = (newTask) =>
    setTodos([...todos, { id: uuid(), task: newTask, completed: false }]);

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);
  };

  const editTodo = (id, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : todo
    );

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    completed,
    incompleteTasks,
    completedTasks,
    allTasks,
  };
};

export default useTodoState;
