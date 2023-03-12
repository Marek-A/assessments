import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import TextField from '@mui/material/TextField';

const TextInput = ({ name, label, type = 'text' }) => (
    <Field name={name}>
        {({ field, meta }) => (
            <TextField {...field} label={label} type={type} error={meta.touched && meta.error} helperText={meta.touched && meta.error} />
        )}
    </Field>
);

const EditTask = ({ task, tasks, setTasks, handleSaveTask, handleCancelEdit }) => {
    const initialValues = {
        name: task.name,
        start: task.start,
        end: task.end,
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Task name is required'),
        start: Yup.date().required('Start date is required'),
        end: Yup.date()
            .required('End date is required')
            .min(Yup.ref('start'), 'End date should be after start date'),
    });

    const handleDelete = () => {
        const updatedTasks = tasks.filter((t) => t.id !== task.id);
        setTasks(updatedTasks);
    };

    const handleSubmit = ({ name, start, end }) => {
        const updatedTask = {
            ...task,
            name,
            start,
            end,
        };
        handleSaveTask(updatedTask);
    };

    return (
        <Dialog sx={{
            backgroundColor: 'rgba(0, 98, 255, 0.5)',
        }} open onClose={handleCancelEdit}>
            <DialogTitle sx={{
                textAlign: "center",
                padding: '15px',
                fontSize: '20px',
                backgroundColor: '#1976d2',
                color: '#fff',
            }}>Edit Task</DialogTitle>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ dirty, isValid }) => (
                    <Form>

                        <DialogContent>
                            <TextInput name="name" label="Task Name" />
                            <TextInput name="start" label="Start Date" type="date" />
                            <TextInput name="end" label="End Date" type="date" />
                        </DialogContent>

                        <DialogActions sx={{ justifyContent: 'center' }}>
                            <Button onClick={handleDelete} color="error">
                                Delete Task
                            </Button>
                            <Button onClick={handleCancelEdit} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" color="success" disabled={!dirty || !isValid}>
                                Save
                            </Button>
                        </DialogActions>

                    </Form>
                )}
            </Formik>
        </Dialog>
    );
};

EditTask.defaultProps = {
    task: { name: '', start: '', end: '' }
};

export default EditTask;
