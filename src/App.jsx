import { useState } from 'react'
import './App.css'

function App() {
  const [ userImput, setUserImput ] = useState("")
  const [ toDoList, setToDoList ] = useState([])


  const handleChange = (e) => {
    setUserImput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      // e.stopPropagation()
      handleAddTask(userImput)
      setUserImput("")
  }

  const handleAddTask = (e) => {
    e.preventDefault()
    if (userImput != "") {
    setToDoList([...toDoList, userImput])
    setUserImput("")
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>To-Do List</p>
      </header>
      <form onSubmit={handleSubmit} className="Group">
        <div className="form__group field">
          <input value={userImput} type="text" placeholder="Enter task..." onChange={handleChange} className="form__field" autocomplete="off"/>
        </div>
        <button className="Button" onClick={handleAddTask}>Submit</button>
      </form>
      <ul className="todo-list" >
        {toDoList.map(item => (<div className="Item">{item}</div>))}
      </ul>
    </div>
  )
}

export default App
