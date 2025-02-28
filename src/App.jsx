import './App.css'
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }
  
  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setTodos([...todos, {text: input, done: false}])
    setInput('');
  }

  const deleteTodo = (indexToDelete) => {
    setTodos(
      todos.filter((todo, index) => {
        return index !== indexToDelete;
      })
    )
  }

  const toggleTodoStatus = (indexToToggle) => {
    setTodos(
      todos.map((todo, index) => {
        return index === indexToToggle ? {...todo, done: !todo.done} : todo;
      })
    )
  }

  const clearCompletedTodos = (e) => {
    e.preventDefault();
    setTodos(
      todos.filter(todo => {
        return !todo.done;
      })
    )
  }

  return (
    <div className='app-container'>
      <h1>ToDo-App</h1>
      <form>
        <input 
          type="text" 
          name="todoInput" 
          id="todoInput" 
          placeholder="Start writing something..."
          value={input} 
          onChange={handleInputChange}/>
        <div className="controls">
          <button className='add btn' onClick={addTodo}>ADD</button>
          <button className='clear btn' onClick={clearCompletedTodos}>DEL</button>
        </div>
      </form>
      <div className="todo-list">
        {todos.map((todo, index) => {
          return (
            <div 
              className={`todo-item ${todo.done ? 'completed-todo' : ''}`}
              key={index} 
              onClick={() => toggleTodoStatus(index)}>
              <button 
                className="delete-todo-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTodo(index);
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
