import React from "react";

function Filter({ setFilter }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        onClick={() => setFilter("all")}
        style={{
          padding: "10px 15px",
          marginRight: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
        }}
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        style={{
          padding: "10px 15px",
          marginRight: "10px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
        }}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("pending")}
        style={{
          padding: "10px 15px",
          backgroundColor: "#ffc107",
          color: "white",
          border: "none",
        }}
      >
        Pending
      </button>
    </div>
  );
}

export default Filter;
