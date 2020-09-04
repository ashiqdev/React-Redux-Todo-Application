import React from 'react';
import TodoApp from './TodoApp';
import { StateProvider } from '../store/store';

function App() {
  return (
    <div className='App'>
      <StateProvider>
        <TodoApp />
      </StateProvider>
    </div>
  );
}

export default App;
