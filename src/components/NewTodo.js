import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "../actions";

const NewTodo = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  const handelClick = (e) => {
    e.preventDefault();
    const isDuplicateText = todos.some((todo) => todo.text === inputValue);
    if (!isDuplicateText) {
      onCreatePressed(inputValue);
      setInputValue("");
    }
  };
  return (
    <div className="new-todo">
      <input
        type="text"
        placeholder="Enter your todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handelClick}>Create</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);
