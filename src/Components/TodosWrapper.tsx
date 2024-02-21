import React, { useState } from "react";

import Todo from "./Todo";
import TodosFormTest from "./TodosForm";
import { Todo as TodoType } from "./Types/Todo.Types";

export default function TodosWrapper() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title,
        isCompleted: false,
      },
    ]);
    return true;
  };
  const deletTodo = (todoId: string) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));

    return true;
  };
  const toggleComplete = () => {
    // codding soon...
  };
  return (
    <div className="TodoWrapper">
      <h1>Todo App</h1>
      <TodosFormTest addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deletTodo={deletTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}
