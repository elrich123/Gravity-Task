import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo({
        id: Date.now(),
        text: task,
        completed: false,
      });
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: "10px",
          width: "calc(100% - 50px)",
          marginRight: "10px",
          fontSize: "16px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          fontSize: "16px",
        }}
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
