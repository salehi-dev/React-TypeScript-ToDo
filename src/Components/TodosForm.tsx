import React from "react";

export default function TodosForm() {
  return (
    <form className="TodoForm">
      <input type="text" className="todo-input" placeholder="add todo..." />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}
