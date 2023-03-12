import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';

import NewTask from './taskComponents/NewTask';
import EditTask from './taskComponents/EditTask';
import QuarterTable from './tableComponents/QuarterTable';

function HomePage() {
    const [selectedTask, setSelectedTask] = useState(null);
    const [tasks, setTasks] = useState([]);

    const handleSelectTask = (task) => {
        setSelectedTask(task);
    };

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <Container maxWidth="sm">
                <Typography variant="p" component="div" sx={{
                    textAlign: 'center',
                    padding: '3vh 0 3vh 0',
                    fontSize: '50px',
                    color: '#000'
                }}>
                    QUARTERS
                </Typography>

                <QuarterTable />

                <Typography variant="p" component="div" sx={{
                    textAlign: 'center',
                    padding: '3vh 0 3vh 0',
                    fontSize: '50px',
                    color: '#000'
                }}>
                </Typography>
            </Container>

            <Container maxWidth="sm">
                <Typography variant="p" component="div" sx={{
                    textAlign: 'center',
                    padding: '3vh 0 3vh 0',
                    fontSize: '50px',
                    color: '#000'
                }}>
                    TASKS
                </Typography>
                <NewTask handleSelectTask={handleSelectTask} addTask={handleAddTask} />
                {selectedTask && <EditTask task={selectedTask} />}
            </Container>
        </Container>
    );
}

export default HomePage;