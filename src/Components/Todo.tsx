import React from "react";

import "./Todo.css";
import { Todo as TodoType } from "./Types/Todo.Types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

type TodoProps = {
  todo: TodoType;
  deletTodo: (id: string) => boolean;
  toggleComplete: (id: string) => void;
};

export default function Todo({ todo, toggleComplete, deletTodo }: TodoProps) {
  return (
    <div className="Todo">
      <p className={`${todo.isCompleted ? "completed" : ""}`}>{todo.title}</p>
      <div onClick={() => deletTodo(todo.id)}>
        {
          <FontAwesomeIcon
            className="delet-icon"
            color="#FF5252"
            icon={faTrash}
          />
        }
      </div>
    </div>
  );
}
