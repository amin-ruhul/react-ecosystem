import React from "react";

const TodoListItem = ({ todo }) => (
  <div>
    <h2>{todo.text}</h2>
    <div>
      <button>Complete</button>
      <button>Remove</button>
    </div>
  </div>
);

export default TodoListItem;
