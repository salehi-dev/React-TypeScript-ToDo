import React from "react";

export default function Todo() {
  return (
    <div className="Todo">
      {/* display todos 👆🏻👆🏻 */}
      <p
        className="completed" // or completed className
      >
        Test Todo Title :)
      </p>
      {/* icon={faTrash} */}
      <div>{/* <FontAwesomeIcon /> */}</div>
    </div>
  );
}
