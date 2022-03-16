import { useState } from 'react';
import { v4 } from 'uuid';
import './App.css';
import Image from './icons/checkbox.svg';
import CorrectButton from './icons/correct-icon.svg';
import WrongButton from './icons/wrong-icon.svg';

function factoryTask(task) {
  return {
    id: v4(),
    task,
    isDone: false,
  };
}

function App() {
  const [userImput, setUserImput] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const handleChange = (e) => {
    setUserImput(e.currentTarget.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (userImput !== '') {
      setToDoList([...toDoList, factoryTask(userImput)]);
      setUserImput('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // e.stopPropagation()
    handleAddTask(userImput);
    setUserImput('');
  };

  const handleDelete = (id) => () => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  const handleClearAll = () => {
    setToDoList([]);
  };

  const handleDone = (id) => {
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={Image} alt="logo" className="Image-header" />
        <span className="Title-header">TO-DO LIST</span>
      </header>
      <div onSubmit={handleSubmit} className="Group">
        <div className="form__group field">
          <input
            value={userImput}
            type="text"
            placeholder="Enter task..."
            onChange={handleChange}
            className="form__field"
          />
        </div>
        <button className="Button" onClick={handleAddTask} type="button">
          Submit
        </button>
      </div>
      <div className="todo-list">
        {toDoList.map((item) => (
          <span className="Task" id={item.id}>
            <div className="Item" key={item.task}>
              {item.task}
            </div>
            <div className="Options">
              <img src={CorrectButton} alt="logo" className="Correct-icon" onClick={handleDone} />
              <img
                src={WrongButton}
                alt="logo"
                className="Wrong-icon"
                onClick={handleDelete(item.id)}
              />
            </div>
          </span>
        ))}
      </div>
      <button type="button" className="Button-clear" onClick={handleClearAll}>
        Clear Tasks
      </button>
    </div>
  );
}

export default App;
