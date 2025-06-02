import { useState } from "react";

const Modal = ({ addTodo, closeModal }) => {
  const [modalText, setModalText] = useState("");

  const handleAddPress = () => {
    if (modalText.trim() === "") {
      alert("Todo can't be empty");
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      text: modalText,
      completed: false,
    };
    addTodo(newTodo);
    closeModal();
  };

  const handleEnterPress = (e) => {
    if (e.key == "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAddPress();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <p className="modal-header">New todo</p>
        <textarea
          autoFocus
          name="todoContent"
          id="todoContent"
          placeholder="Write a task..."
          value={modalText}
          onChange={(e) => {
            setModalText(e.target.value);
            console.log(e.target.value);
          }}
          onKeyDown={handleEnterPress}
        ></textarea>
        <div className="modal-buttons">
          <button className="cancel-btn" onClick={closeModal}>
            Cancel
          </button>
          <button className="add-btn" onClick={handleAddPress}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
