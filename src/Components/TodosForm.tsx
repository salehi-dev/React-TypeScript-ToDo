import React, { useState } from "react";

type todoProps = {
  addTodo: (title: string) => boolean;
};

export default function TodosForm({ addTodo }: todoProps) {
  // TODO:  تایپ این اگر استرینگ باشه آیا در اینپوت عدد هم میگیرد؟
  const [value, setValue] = useState<string>("");
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <form className="TodoForm" onSubmit={submitHandler}>
      <input
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
