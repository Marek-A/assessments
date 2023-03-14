import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
} from "react-bootstrap";

const TaskTable = ({ tasks, weeksInMonth, onDeleteTask, setSelectedTask }) => {

  const weeksByMonth = {};
  weeksInMonth.forEach((week) => {
    const month = week[0].toLocaleString("default", { month: "short" });
    if (!weeksByMonth[month]) {
      weeksByMonth[month] = [];
    }
    weeksByMonth[month].push(week);
  });

  const monthNames = Object.keys(weeksByMonth);

  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setTask] = useState({});

  const handleClose = () => setShowModal(false);
  const handleEdit = () => {
    setSelectedTask(selectedTask);
    setShowModal(false);
  };
  const handleSave = () => {
    handleEdit();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Table striped bordered hover className="task-table">
        <thead>
          <tr>
            <th></th>
            {monthNames.map((monthName) => (
              <th key={monthName} colSpan={weeksByMonth[monthName].length}>
                {monthName}
              </th>
            ))}
          </tr>
          <tr>
            <th></th>
            {monthNames.map((monthName) =>
              weeksByMonth[monthName].map((week, index) => (
                <th key={`${monthName}_${index}`}>{index + 1}</th>
              ))
            )}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            const startIndex = weeksInMonth.findIndex((week) =>
              week.includes(new Date(task.startDate))
            );
            const endIndex = weeksInMonth.findIndex((week) =>
              week.includes(new Date(task.endDate))
            );
            return (
              <tr key={task.id}>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => {
                      setTask(task);
                      setShowModal(true);
                    }}
                  ></Button>{" "}
                  {task.name}
                </td>
                {weeksInMonth.map((week, index) => (
                  <td
                    key={index}
                    style={{
                      backgroundColor:
                        index >= startIndex && index <= endIndex
                          ? "lightblue"
                          : "",
                    }}
                  ></td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={handleClose}>
        <ModalHeader closeButton>Task Information</ModalHeader>
        <ModalBody>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={selectedTask.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={selectedTask.startDate}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>End Date</Form.Label>

              <Form.Control
                type="date"
                name="endDate"
                value={selectedTask.endDate}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
          <Button
            variant="danger"
            onClick={() => onDeleteTask(selectedTask.id)}
          >
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default TaskTable;
