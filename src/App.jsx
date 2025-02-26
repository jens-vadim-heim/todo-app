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
    setTodos([...todos, {text: input}])
    setInput('');
  }

  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((todo, index) => index !== indexToDelete))
  }

  return (
    <div className='wrapper'>
      <h1>ToDo-list</h1>
      <form>
        <input 
          type="note" 
          name="note" 
          id="note" 
          placeholder="Start writing a note..."
          value={input} 
          onChange={handleInputChange}/>
        <button className='add-note-btn' onClick={handleAdd}>ADD</button>
      </form>
      <div className="todo-container">
        {todos.map((todo, index) => {
          return (
            <div className="todo" key={index} onClick={() => handleDelete(index)}>
              <button 
                className="dlt-btn"
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
