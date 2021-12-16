import { useState } from 'react';

import './App.css';

function App() {
  //start Hooks
  const [input, setInputs] = useState('');
  const [todoList, setTodoList] = useState([]);

  // start functions
  const changeHandler = (e) => {
    setInputs(e.target.value);
  };
  let id = null;

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

  const romoveHandler = (id) => {
    const removedArr = [...todoList].filter((e) => e.id !== id);
    setTodoList(removedArr);
  };
  const completeHandler = (id) => {
    let updatedTodos = [...todoList].map((todo) => {
      if (todo.id === id) {
        todo.completeHandler = !todo.completeHandler;
      }
      return todo;
    });
    setTodoList(updatedTodos);
  };

  // start Return
  return (
    <div className='App'>
      <div className='todo-app'>
        <h1>ToDo App</h1>
        <form className='todo-input' onSubmit={submitHandler}>
          <input
            placeholder='Add a todo'
            value={input}
            type='text'
            onChange={changeHandler}
          />
          <button className='add-btn'>ADD</button>
        </form>
      </div>

      <div className='works-todo'>
        {todoList.map((e) => (
          <div
            className={e.completeHandler ? 'works complete' : 'works'}
            key={e.id}
          >
            <p className='work'>{e.text}</p>
            <div className='works-btn'>
              <button
                className='done-btn'
                onClick={() => completeHandler(e.id)}
              >
                ✅
              </button>
              <button
                className='not-done-btn'
                onClick={() => romoveHandler(e.id)}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
