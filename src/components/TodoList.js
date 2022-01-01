import { useState } from 'react';

import './TodoList.css';

const TodoList = ({ completeHandler, removeHandler, todoList }) => {
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
              onClick={() => removeHandler(e.id)}
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
