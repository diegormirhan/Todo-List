import { useState } from 'react';
import './App.css';

function App() {
  const [userImput, setUserImput] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const handleChange = (e) => {
    setUserImput(e.currentTarget.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (userImput !== '') {
      setToDoList([...toDoList, userImput]);
      setUserImput('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // e.stopPropagation()
    handleAddTask(userImput);
    setUserImput('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>To-Do List</p>
      </header>
      <form onSubmit={handleSubmit} className="Group">
        <div className="form__group field">
          <input
            value={userImput}
            type="text"
            placeholder="Enter task..."
            onChange={handleChange}
            className="form__field"
            autoComplete="off"
          />
        </div>
        <button className="Button" onClick={handleAddTask} type="button">
          Submit
        </button>
      </form>
      <ul className="todo-list">
        {toDoList.map((item) => (
          <div className="Item" key={item}>
            {item}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
