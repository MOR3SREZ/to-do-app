import './App.css';
import Do from './components/Do';
function App() {
  return (
    <div className='App'>
      <div className='todo-app'>
        <h1>ToDo App</h1>
        <div className='todo-input'>
          <input type='text' />
          <button className='add-btn'>ADD</button>
        </div>
      </div>
      <Do />
      <Do />
      <Do />
    </div>
  );
}

export default App;
