import React from "react";

function Task({ task, deleteTask, category, text }) {
  console.log(task)

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => deleteTask(task)}>
        X
      </button>
    </div>
  );
}

export default Task;