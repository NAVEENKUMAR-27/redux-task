import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Button, Grid, IconButton, Modal, Stack, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask, setselectedTask, updateTaskList } from '../../Redux/Features/crudSlice';


const TaskLists = () => {
    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [id, setId] = useState('')


    const { taskList } = useSelector((state) => state.crud)
    const { selectedTask } = useSelector((state) => state.crud)
    const dispatch = useDispatch()

    const updateTask = (task) => {
        dispatch(setselectedTask(task))
        setOpen(true)
    }

    const deleteTask = (task) => {
        dispatch(removeTask(task))
    }
    const handleUpdateTable = () => {
        const updatedTask = {
            id: id,
            taskName: taskName,
            taskDescription: taskDescription,
        };
        dispatch(updateTaskList(updatedTask));
        handleClose();
    };

    useEffect(() => {
        if (Object.keys(selectedTask).length !== 0) {
            setTaskName(selectedTask.taskName)
            setTaskDescription(selectedTask.taskDescription)
            setId(selectedTask.id)
        }
    }, [selectedTask])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '10px solid pink',
        
        boxShadow: 24,
        p: 4,
    };


    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid component="main" maxWidth="md" sx={{ margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 10 }}>
                <Grid item lg={6} sx={{width:500}}>
                    <Table hover variant="light">
                        <thead>
                            <tr className='text-center'>
                                <th>Sl.No</th>
                                <th>Task Name</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                taskList && taskList.map((task, index) => (
                                    <>
                                        <tr className='text-center' key={task.id}>
                                            <td>{index + 1}</td>
                                            <td>{task.taskName}</td>
                                            <td>{task.taskDescription}</td>

                                            <td>

                                                <IconButton aria-label="delete" size="large" onClick={() => { updateTask(task) }}>
                                                    <EditIcon sx={{ color: "blue" }} />
                                                </IconButton>
                                                <Modal
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                >
                                                    <Box sx={style}>
                                                        <form >
                                                            <Grid item lg={4}>
                                                                <Stack direction='column' spacing={5} sx={{ justifyContent: "center" }}>
                                                                    <Typography variant='h6' sx={{ fontWeight: "Bold", textAlign: "center" }}>Update the task</Typography>
                                                                    <TextField id="filled-basic" label="Enter task Name" variant="outlined" sx={{ width: 400 }} value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                                                                    <TextField id="filled-basic" label="Enter task description" variant="outlined" sx={{ width: 400 }} value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
                                                                    <Stack direction="row-reverse">
                                                                        <Button variant='contained' type='sumbit' sx={{ width: 80, height: 40 }} onClick={handleUpdateTable} >Update </Button>
                                                                    </Stack>
                                                                </Stack>
                                                            </Grid>
                                                        </form>
                                                    </Box>
                                                </Modal>

                                                <IconButton aria-label="delete" size="large" onClick={() => deleteTask(task)}>
                                                    <DeleteIcon sx={{ color: "red" }} />
                                                </IconButton>

                                            </td>
                                        </tr>


                                    </>

                                ))
                            }


                        </tbody>
                    </Table>

                </Grid>




            </Grid>
        </>)
}

export default TaskLists