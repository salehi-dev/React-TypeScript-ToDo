import "./App.css";

function App() {
  return (
    <div className="TodoWrapper">
      <h1>Todo App</h1>
      {/* Add New Todo Form */}

      <form className="TodoForm">
        <input type="text" className="todo-input" placeholder="add todo..." />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>

      {/* display todos */}
      <div className="Todo">
        <p
          className="" // or completed className
        >
          Test Todo Title :)
        </p>
        {/* icon={faTrash} */}
        <div>{/* <FontAwesomeIcon /> */}</div>
      </div>
    </div>
  );
}

export default App;
