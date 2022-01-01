import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

import { useState } from 'react';
function App() {
  let id = null;
  //------States
  const [input, setInputs] = useState('');
  const [todoList, setTodoList] = useState([]);

  //-------Functions
  //*take the text a
  const changeHandler = (e) => {
    setInputs(e.target.value);
  };

  //* add todoes to the list
  const submitHandler = (e) => {
    e.preventDefault();
    id = Math.floor(Math.random() * 10000);
    const obj = {
      id: id,
      text: input,
    };
    if (!obj.text || /^\s*$/.test(obj.text)) {
      return;
    } else {
      todoList.push(obj);
      setTodoList([...todoList]);
    }

    setInputs('');
  };

  //* Remove the todos from the list
  const removeHandler = (id) => {
    const removedArr = [...todoList].filter((e) => e.id !== id);
    setTodoList(removedArr);
  };

  //* complete the todos
  const completeHandler = (id) => {
    let updatedTodos = [...todoList].map((todo) => {
      if (todo.id === id) {
        todo.completeHandler = !todo.completeHandler;
      }
      return todo;
    });

    setTodoList(updatedTodos);
  };

  return (
    <div className='App'>
      <Todo
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        input={input}
      />
      <TodoList
        removeHandler={removeHandler}
        completeHandler={completeHandler}
        todoList={todoList}
      />
    </div>
  );
}

export default App;
