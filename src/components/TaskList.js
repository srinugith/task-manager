import React from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask, editTask }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
