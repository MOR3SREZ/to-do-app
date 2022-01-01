import { useState } from 'react';

import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='App'>
      <Todo inputs={props.inputs} />
      <TodoList />
    </div>
  );
}

export default App;
