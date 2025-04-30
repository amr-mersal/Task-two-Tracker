import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({ setTasks }) => {
  const [taskName, setTaskName] = useState("");

  // Function to add a new task
  const handleAddTask = (e) => {
    e.preventDefault(); //stop the page reload when submitting the form
    if (!taskName.trim()) return; // Ignore if input is empty
    const newTask = {
      id: uuidv4(), // Unique ID
      name: taskName,
      completed: false,
    };
    // Add the new task to the top
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    //Clear the input field
    setTaskName("");
  };

  return (
    <Form onSubmit={handleAddTask}>
      <Row className="align-items-end g-2 mb-3">
        <Col md={8}>
          <Form.Group controlId="taskName">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Button variant="primary" type="submit" className="w-100">
            Add Task
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TaskForm;
