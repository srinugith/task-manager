import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  // Load tasks from localStorage on initial load
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to localStorage when tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskToDelete) => {
    const newTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(newTasks);
  };
  const filteredTasks = tasks.filter(task => 
    filterStatus === "All" || task.status === filterStatus
  );

  const editTask = (editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.title === editedTask.title ? editedTask : task
    );
    setTasks(updatedTasks);
  };

  return (
    <>
    <div className="App">
      <h1>Task Manager</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
    <div>
    <select onChange={(e) => setFilterStatus(e.target.value)}>
      <option value="All">All</option>
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>
    <TaskList tasks={filteredTasks} deleteTask={deleteTask} editTask={editTask} />
  </div>
    </>
    
    
  );
}

export default App;
