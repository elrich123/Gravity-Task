import React from "react";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li
      style={{
        listStyle: "none",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: "#f8f9fa",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "5px",
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      <span
        onClick={() => toggleComplete(todo.id)}
        style={{ cursor: "pointer", flexGrow: "1" }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          padding: "5px 10px",
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
