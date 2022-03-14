import { useState, useRef } from 'react';
import './App.css';
import Image from './icons/checkbox.svg';
import CorrectButton from './icons/correct-icon.svg';
import WrongButton from './icons/wrong-icon.svg';

function App() {
  const [userImput, setUserImput] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const item1 = useRef();

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

  // make a handle that delete a item selected when click on the button using the id from span tag
  const handleDelete = (e) => {
    const index = e.currentTarget.id;
    const newToDoList = [...toDoList];
    newToDoList.splice(index);
    setToDoList(newToDoList);
  };

  const handleClearAll = () => {
    const removeAllToDo = [...toDoList];
    removeAllToDo.splice(0, toDoList.length);
    setToDoList(removeAllToDo);
  };

  // make a handle that set a item done when clicked using id
  const handleDone = (id) => {
    const newToDoList = toDoList.map((item) => {
      if (item === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setToDoList(newToDoList);
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
          <span className="Task" id={toDoList.indexOf(item)}>
            <div className="Item" key={item} ref={item1}>
              {item}
            </div>
            <div className="Options">
              <img src={CorrectButton} alt="logo" className="Correct-icon" onClick={handleDone} />
              <img src={WrongButton} alt="logo" className="Wrong-icon" onClick={handleDelete} />
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
