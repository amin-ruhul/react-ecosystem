import React from "react";

const TodoListItem = ({ todo, onRemovePressed, onCompletePress }) => {
  console.log(todo);
  return (
    <div className="todo-item">
      <h2>{todo.text}</h2>
      <div className="action-btn">
        {!todo.isCompleted ? (
          <button
            className="btn btn-complete"
            onClick={() => onCompletePress(todo.text)}
          >
            Complete
          </button>
        ) : (
          ""
        )}
        <button
          className="btn btn-remove"
          onClick={() => onRemovePressed(todo.text)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
