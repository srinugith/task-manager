import React, { useState } from "react";

function TaskCard({ task, deleteTask, editTask }) {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEdit = () => {
    if (editing) {
      editTask(editedTask);
    }
    setEditing(!editing);
  };

  return (
    <div className="task-card">
      {editing ? (
        <>
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
          />
          <textarea
            value={editedTask.description}
            onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
          />
          <input
            type="date"
            value={editedTask.dueDate}
            onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
          />
          <select
            value={editedTask.status}
            onChange={(e) => setEditedTask({ ...editedTask, status: e.target.value })}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.dueDate}</p>
          <p>{task.status}</p>
        </>
      )}
      <button onClick={handleEdit}>{editing ? "Save" : "Edit"}</button>
      <button onClick={() => deleteTask(task)}>Delete</button>
    </div>
  );
}

export default TaskCard;
