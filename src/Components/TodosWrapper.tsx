import React, { useState } from "react";
import swal from "sweetalert";

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
  const deletTodo = (todoId: string): boolean => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete Todo?",
      icon: "warning",
      buttons: ["No", "Yes, Delet"],
      dangerMode: true,
    }).then((result) => {
      if (result) {
        setTodos(todos.filter((todo) => todo.id !== todoId));
        swal({
          title: "ToDo deleted",
          icon: "success",
        });
      }
    });

    return true;
  };
  const toggleComplete = (todoId: string): boolean => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
    return true;
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
