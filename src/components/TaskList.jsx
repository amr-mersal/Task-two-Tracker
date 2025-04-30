import React from "react";
import { ListGroup, Button, Form } from "react-bootstrap";

const TaskList = ({ tasks, handleDelete, toggleComplete }) => {
  return (
    <ListGroup>
      {/* Show message if no tasks exist */}
      {tasks.length === 0 ? (
        <p className="text-center fs-5 mt-4">No tasks yet! </p>
      ) : (
        tasks.map((task) => (
          <ListGroup.Item
            key={task.id}
            className="d-flex justify-content-between align-items-center"
          >
            <div
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                opacity: task.completed ? 0.6 : 1,
              }}
            >
              <Form.Check
                type="checkbox"
                className="d-inline-block me-2"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              {task.name}
            </div>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))
      )}
    </ListGroup>
  );
};

export default TaskList;
