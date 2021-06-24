import React from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import NewTodo from "./NewTodo";
import { displayAlert } from "../thunks";
import { removeTodo, completeTodo } from "../actions";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletePress,
  onDisplayAlertClicked,
}) => (
  <div>
    <NewTodo />
    {todos.map((todo) => (
      <TodoListItem
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletePress={onDisplayAlertClicked}
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
  onDisplayAlertClicked: () => dispatch(displayAlert),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
