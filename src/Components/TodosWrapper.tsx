import React from "react";

import Todo from "./Todo";
import TodosFormTest from "./TodosForm";

export default function TodosWrapper() {
  return (
    <div className="TodoWrapper">
      <h1>Todo App</h1>
      <TodosFormTest />
      <Todo />
    </div>
  );
}
