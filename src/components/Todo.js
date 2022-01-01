import { useState } from 'react';
import './Todo.css';

const Todo = (props) => {
  const [input, setInputs] = useState('');

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
  return (
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
  );
};

export default Todo;
