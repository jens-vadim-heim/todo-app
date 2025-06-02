import { useState, useEffect } from "react";
import Todo from "./Todo";
import Modal from "./Modal";
import Message from "./Message";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [view, setView] = useState("list");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem("TODOS");
    console.log("Loading todos from localStorage:", storedTodos);
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    console.log("Saving todos to localStorage:", todos);
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

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

  const toggleView = () => {
    setView((prev) => (prev === "list" ? "grid" : "list"));
  };

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {modalIsOpen && <Modal addTodo={addTodo} closeModal={closeModal} />}

      <div className="controls">
        <button className="create-btn" onClick={() => setModalIsOpen(true)}>
          Create
        </button>
        <button className="remove-btn" onClick={removeCompleted}>
          Remove completed
        </button>
        <button
          className="view-btn"
          onClick={toggleView}
          disabled={todos.length == 0}
        >
          {view === "list" ? "Grid" : "List"} view
        </button>
      </div>

      <br />

      {todos.length == 0 && <Message message={"All done! No todos to show."} />}

      <ul className={`todo-container ${view}`}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            data={todo}
            toggleCompleted={() => toggleCompleted(todo.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
