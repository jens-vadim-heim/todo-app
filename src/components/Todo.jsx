const Todo = ({ data, deleteTodo, toggleCompleted }) => {
  return (
    <div
      className={`todo ${data.completed ? "completed" : ""}`}
      onClick={toggleCompleted}
    >
      {/* Todo text content */}
      <p className={`todo-text ${data.completed ? "text-done" : ""}`}>
        {data.text}
      </p>

      {/* Todo delete button */}
      <button
        className="delete-todo-button"
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(data.id);
        }}
      >
        DEL
      </button>
    </div>
  );
};

export default Todo;
