import React, { useState } from "react";

const NewTodo = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo">
      <input
        type="text"
        placeholder="Enter your todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button>Create</button>
    </div>
  );
};

export default NewTodo;
