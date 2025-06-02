const Todo = ({ data, toggleCompleted }) => {
  return (
    <div
      className={`todo ${data.completed ? "completed" : ""}`}
      onClick={toggleCompleted}
    >
      <p className="todo-text">{data.text}</p>
      <ul className="todo-tags"></ul>
    </div>
  );
};

export default Todo;
