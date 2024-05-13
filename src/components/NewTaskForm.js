import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [newTask, setNewTask] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[0]); // Assuming categories array is not empty

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit({ text: newTask, category: taskCategory });
    setNewTask("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      </label>
      <label>
        Category
        <select value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}>
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;