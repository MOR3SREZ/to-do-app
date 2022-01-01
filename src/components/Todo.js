import './Todo.css';

const Todo = ({ submitHandler, changeHandler, input }) => {
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
