import React from "react";
import TodoListItem from "./TodoListItem";
import NewTodo from "./NewTodo";

const TodoList = ({ todos = [{ text: "Hello" }] }) => (
  <div>
    <NewTodo />
    {todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </div>
);

export default TodoList;
