import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import Filter from "../components/Filter";
import { Container, Row, Col, Button } from "react-bootstrap";

function TaskTracker() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Filter state: 'all', 'completed', or 'incomplete'
  const [filter, setFilter] = useState("all");
  // Dark mode state, initialized based on localStorage value
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  // Save tasks to localStorage every time they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // Update body classes and save theme preference when darkMode changes
  useEffect(() => {
    document.body.className = darkMode
      ? "bg-dark text-white"
      : "bg-light text-dark";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  // Delete a task
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Apply filtering to the list of tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <Container className="py-4">
      {/* Header with title and dark/light mode toggle */}
      <Row className="mb-4">
        <Col>
          <h2 className="text-center"> Task Tracker</h2>
        </Col>
        <Col className="text-end">
          <Button
            variant={darkMode ? "light" : "dark"}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? " Light Mode" : " Dark Mode"}
          </Button>
        </Col>
      </Row>
      {/* Form to add a new task */}
      <TaskForm setTasks={setTasks} />
      {/* Filter buttons to switch between all/completed/incomplete */}
      <Filter setFilter={setFilter} filter={filter} />
      {/* Task list, filtered and with delete/toggle functionality */}
      <TaskList
        tasks={filteredTasks}
        handleDelete={handleDelete}
        toggleComplete={toggleComplete}
      />
    </Container>
  );
}

export default TaskTracker;
