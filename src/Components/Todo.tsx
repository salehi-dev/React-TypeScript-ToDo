import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

import "./Todo.css";
import { Todo as TodoType } from "./Types/Todo.Types";

type TodoProps = {
  todo: TodoType;
  deletTodo: (id: string) => boolean;
  toggleComplete: (id: string) => boolean;
};

export default function Todo({ todo, toggleComplete, deletTodo }: TodoProps) {
  return (
    <div className="Todo">
      <p className={`${todo.isCompleted ? "completed" : ""}`}>{todo.title}</p>
      <div className="icon-wrapper">
        <div onClick={() => toggleComplete(todo.id)}>
          {todo.isCompleted ? (
            <FontAwesomeIcon
              icon={faCirclePlus}
              size="xl"
              className="plus-icon"
            />
          ) : (
            <FontAwesomeIcon
              icon={faCircleCheck}
              size="xl"
              className="check-icon"
            />
          )}
        </div>
        <div onClick={() => deletTodo(todo.id)}>
          <FontAwesomeIcon
            className="delet-icon"
            color="#FF5252"
            icon={faTrash}
          />
        </div>
      </div>
    </div>
  );
}
