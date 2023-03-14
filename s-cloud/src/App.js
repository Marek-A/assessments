import React, { useState } from "react";
import TaskTable from "./components/TaskTable";
import TaskForm from "./components/TaskForm";
import QuarterView from "./components/QuarterView";
import { getQuarterDates, getWeeksInMonth } from "./utils/dateUtils";
import tasksData from "./data/tasks";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [currentQuarter, setCurrentQuarter] = useState(
    getQuarterDates(new Date())
  );
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const changeQuarter = (direction) => {
    const currentMonth = currentQuarter[1].getMonth();
    const nextMonth = currentMonth + direction * 3;
    setCurrentQuarter(
      getQuarterDates(new Date(currentQuarter[1].getFullYear(), nextMonth, 1))
    );
  };

  return (
    <div class="container-fluid d-flex justify-content-center">
      <div class="col-md-5">
        <TaskTable
          tasks={tasks}
          currentQuarter={currentQuarter}
          weeksInMonth={getWeeksInMonth(currentQuarter)}
          onDeleteTask={deleteTask}
          setSelectedTask={setSelectedTask}
        />
        <QuarterView
          currentQuarter={currentQuarter}
          changeQuarter={changeQuarter}
        />
        <div class="container-fluid d-flex justify-content-center">
          <TaskForm
            onAddTask={addTask}
            onUpdateTask={updateTask}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
          />
        </div>{" "}
      </div>
    </div>
  );
};

export default App;
