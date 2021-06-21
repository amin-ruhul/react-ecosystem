import React from "react";

const TodoListItem = ({ todo }) => (
  <div className="todo-item">
    <h2>{todo.text}</h2>
    <div className="action-btn">
      <button className="btn btn-complete">Complete</button>
      <button className="btn btn-remove">Remove</button>
    </div>
  </div>
);

export default TodoListItem;
