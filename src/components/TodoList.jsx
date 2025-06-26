import { useState, useEffect } from "react";
import Todo from "./Todo";
import Message from "./Message";

const TodoList = () => {
  // State

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState("all");

  // EFFECTS

  // Load todos from localStorage on mount
  useEffect(() => {
    const storedTodos = localStorage.getItem("TODOS");
    console.log("Loading todos from localStorage:", storedTodos);
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to localStorage on add
  useEffect(() => {
    console.log("Saving todos to localStorage:", todos);
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  // HANDLERS

  // Input change
  const handleChange = (e) => {
    setTodo(e.target.value);
    console.log(e.target.value);
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: todo.trim(),
      completed: false,
    };

    addTodo(newTodo);
    setTodo("");
  };

  // TODO MANIPULATION

  const toggleCompleted = (id) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updated);
  };

  const removeCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const removeTodo = (id) => {
    setTodos((prev) =>
      prev.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  // FILTERING

  // Filter todo list based on chosen filters
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
  });

  return (
    <div className="todo-list">
      <div className="controls">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add new task..."
            value={todo}
            onChange={handleChange}
          />
          <button className="create-btn">+</button>
        </form>
      </div>

      {/* Filter buttons */}
      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      {/* List of todo items */}
      <ul className={`todo-container`}>
        {filteredTodos.length == 0 && <Message message={"No todos to show."} />}

        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            data={todo}
            deleteTodo={removeTodo}
            toggleCompleted={() => toggleCompleted(todo.id)}
          />
        ))}
      </ul>

      {/* Clear button */}
      <button className="remove-btn" onClick={removeCompleted}>
        Clear completed
      </button>
    </div>
  );
};

export default TodoList;
