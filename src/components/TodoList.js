import { useState } from 'react';

import './TodoList.css';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

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

  return (
    <div className='works-todo'>
      {todoList.map((e) => (
        <div
          className={e.completeHandler ? 'works complete' : 'works'}
          key={e.id}
        >
          <p className='work'>{e.text}</p>
          <div className='works-btn'>
            <button className='done-btn' onClick={() => completeHandler(e.id)}>
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
  );
};

export default TodoList;
