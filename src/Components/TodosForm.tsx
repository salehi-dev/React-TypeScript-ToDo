import React, { useState, useRef } from "react";

type todoProps = {
  addTodo: (title: string) => boolean;
};

export default function TodosForm({ addTodo }: todoProps) {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  return (
    <form className="TodoForm" onSubmit={submitHandler}>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="todo-input"
        placeholder="add todo..."
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}
