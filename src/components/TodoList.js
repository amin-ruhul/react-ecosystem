import React from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import NewTodo from "./NewTodo";
import { removeTodo } from "../actions";

const TodoList = ({ todos = [], onRemovePressed }) => (
  <div>
    <NewTodo />
    {todos.map((todo) => (
      <TodoListItem todo={todo} onRemovePressed={onRemovePressed} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
