import React, { useState } from 'react'
import { Button, Grid, Stack, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addTask } from '../../Redux/Features/crudSlice'

const FormInput = () => {
    /*State Inital declaring*/
    const [taskName,setTaskName]=useState('')
    const [taskDescription,setTaskDescription]=useState('')
    const dispatch=useDispatch()

    /*OnsubmitFunction*/
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(taskName,taskDescription+">>>>>>>>>>>>>ok")
        dispatch(addTask({taskName,taskDescription}))
        setTaskName("");
        setTaskDescription("")


    }

    return (
        <>
            <Grid component="main" maxWidth='sm' sx={{ margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center',mt:10 }}>
                <form onSubmit={handleSubmit}>
                    <Grid item lg={6} sx={{}}>
                        <Stack direction='column' spacing={5} sx={{ justifyContent: "center" }}>
                            <TextField id="filled-basic" label="Enter task Name" variant="outlined" sx={{width:450}} value={taskName} onChange={(e)=>setTaskName(e.target.value)} />
                            <TextField id="filled-basic" label="Enter task description" variant="outlined" sx={{width:450}} value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)}  />
                            <Stack direction="row-reverse">
                            <Button variant='contained' type='submit' sx={{ width: 80, height: 40 }}>Add</Button>
                            </Stack>
                        </Stack>
                    </Grid>
                </form>
            </Grid>


        </>
    )
}

export default FormInput