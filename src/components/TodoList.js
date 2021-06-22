import React from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import NewTodo from "./NewTodo";
import { removeTodo, completeTodo } from "../actions";

const TodoList = ({ todos = [], onRemovePressed, onCompletePress }) => (
  <div>
    <NewTodo />
    {todos.map((todo) => (
      <TodoListItem
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletePress={onCompletePress}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletePress: (text) => dispatch(completeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
