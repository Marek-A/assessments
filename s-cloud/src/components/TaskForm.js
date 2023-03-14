import React, { useState } from "react";
import {
  Container,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const TaskForm = ({
  onAddTask,
  onUpdateTask,
  selectedTask,
  setSelectedTask,
}) => {
  const [task, setTask] = useState({
    id: selectedTask ? selectedTask.id : "",
    name: selectedTask ? selectedTask.name : "",
    startDate: selectedTask ? selectedTask.startDate : "",
    endDate: selectedTask ? selectedTask.endDate : "",
  });

  const handleChange = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedTask) {
      onUpdateTask(task);
      setSelectedTask(null);
    } else {
      onAddTask(task);
    }
    setTask({
      id: "",
      name: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <Container>
      <Row className="justify-content-center p-5">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Task name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Task name"
              value={task.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="startDate">Start date</Label>
            <Input
              type="date"
              name="startDate"
              id="startDate"
              value={task.startDate}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="endDate">End date</Label>
            <Input
              type="date"
              name="endDate"
              id="endDate"
              value={task.endDate}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button color="primary" type="submit">
            {selectedTask ? "Update" : "Add"}
          </Button>
          {selectedTask && (
            <Button color="secondary" onClick={() => setSelectedTask(null)}>
              Cancel
            </Button>
          )}
        </Form>
      </Row>
    </Container>
  );
};

export default TaskForm;
