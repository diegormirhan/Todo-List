import { useState } from 'react';
import './App.css';
import Image from './icons/checkbox.svg';
import CorrectButton from './icons/correct-icon.svg';
import WrongButton from './icons/wrong-icon.svg';

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
          <span className="Task">
            <div className="Item" key={item}>
              {item}
            </div>
            <div className="Options">
              <img src={CorrectButton} alt="logo" className="Correct-icon" />
              <img src={WrongButton} alt="logo" className="Wrong-icon" />
            </div>
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
