import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { FormControl, InputLabel, Input, Button, Table, TableHead, TableBody, TableRow, TableCell, Checkbox, Dialog, } from '@mui/material';
import EditTask from './EditTask';


const NewTask = ({ addTask }) => {
    
    const [tasks, setTasks] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedTasks, setSelectedTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required').min(3, 'Must be at least 3 characters').max(50, 'Must be at most 50 characters'),
        start: Yup.date().required('Required'),
        end: Yup.date()
            .required('Required')
            .min(Yup.ref('start'), 'End date can not be before start date'),
    });

    const submitTaskForm = (values, { resetForm }) => {
        const newTask = {
            name: values.name,
            start: values.start,
            end: values.end,
        };

        if (tasks.some((task) => task.name === newTask.name && task.start === newTask.start)) {
            alert('Task with that name already exists.');
        } else if (tasks.length >= 10) {
            alert('You can only have 10 tasks.');
        } else {
            setTasks([...tasks, newTask]);
            addTask(newTask);
            resetForm();
        }
    };

    const toggleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            setSelectedTasks([...tasks]);
        } else {
            setSelectedTasks([]);
        }
    };

    const handleSelectTask = (event, task) => {
        if (event.target.checked) {
            setSelectedTasks([...selectedTasks, task]);
        } else {
            setSelectedTasks(selectedTasks.filter((t) => t !== task));
        }
    };

    const handleDeleteSelected = () => {
        const updatedTasks = tasks.filter((task) => !selectedTasks.includes(task));
        setTasks(updatedTasks);
        setSelectedTasks([]);
    };

    const handleEditTask = (task) => {
        setEditingTask(task);
    };

    const handleSaveTask = (updatedTask) => {
        const updatedTasks = tasks.map((task) => (task === editingTask ? updatedTask : task));
        setTasks(updatedTasks);
        setEditingTask(null);
    };

    const handleCancelEdit = () => {
        setEditingTask(null);
    };

    return (
        <>
            <Formik initialValues={{ name: '', start: '', end: '' }} validationSchema={validationSchema} onSubmit={submitTaskForm}>
                {({ errors, touched }) => (
                    <Form>
                        <FormControl error={errors.name && touched.name}>
                            <InputLabel htmlFor="name">Task Name</InputLabel>
                            <Field name="name" as={Input} id="name" />
                            {errors.name && touched.name && <div className="error">{errors.name}</div>}
                        </FormControl>
                        <FormControl error={errors.start && touched.start}>
                            <InputLabel htmlFor="start">Start Date</InputLabel>
                            <Field name="start" as={Input} id="start" type="date" />
                            {errors.start && touched.start && <div className="error">{errors.start}</div>}
                        </FormControl>

                        <FormControl error={errors.end && touched.end}>
                            <InputLabel htmlFor="end">End Date</InputLabel>
                            <Field name="end" as={Input} id="end" type="date" />
                            {errors.end && touched.end && <div className="error">{errors.end}</div>}
                        </FormControl>

                        <Button type="submit" variant="contained" color="success">
                            Add task
                        </Button>
                    </Form>
                )}
            </Formik>

            {tasks.length > 0 && (
                <>
                    <Button onClick={toggleSelectAll} color="primary">
                        {selectAll ? 'Deselect All' : 'Select All'}
                    </Button>
                    <Button onClick={handleDeleteSelected} color="error">
                        Delete Selected
                    </Button>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Task Name</TableCell>
                                <TableCell>Start Date</TableCell>
                                <TableCell>End Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tasks.map((task) => (
                                <TableRow key={task.name + task.start}>
                                    <TableCell>
                                        <Checkbox checked={selectedTasks.includes(task)} onChange={(event) => handleSelectTask(event, task)} />
                                    </TableCell>
                                    <TableCell onClick={() => handleEditTask(task)} style={{ cursor: 'pointer' }}>
                                        {task.name}
                                    </TableCell>
                                    <TableCell>{task.start}</TableCell>
                                    <TableCell>{task.end}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </>
            )}
            {editingTask && (
                <Dialog open onClose={handleCancelEdit}>
                    <EditTask task={editingTask} tasks={tasks} setTasks={setTasks} handleSaveTask={handleSaveTask} handleCancelEdit={handleCancelEdit} />
                </Dialog>
            )}
        </>
    );
};

export default NewTask;
