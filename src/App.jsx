import './App.css'
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }
  
  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setTodos([...todos, {text: input, done: false}])
    setInput('');
  }

  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((todo, index) => index !== indexToDelete))
  }

  const markAsDone = (indexToToggle) => {
    setTodos(todos.map((todo, index) => {
      return index === indexToToggle ? {...todo, done: !todo.done} : todo;
    }))
  }

  return (
    <div className='wrapper'>
      <h1>ToDo-list</h1>
      <form>
        <input 
          type="text" 
          name="noteInput" 
          id="noteInput" 
          placeholder="Start writing something..."
          value={input} 
          onChange={handleInputChange}/>
        <button className='add-note-btn' onClick={handleAdd}>ADD</button>
      </form>
      <div className="todo-container">
        {todos.map((todo, index) => {
          return (
            <div 
              className={`todo ${todo.done ? 'done' : ''}`}
              key={index} 
              onClick={() => markAsDone(index)}>
              <button 
                className="dlt-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(index);
                }}
                >Delete</button>
              {todo.text}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
