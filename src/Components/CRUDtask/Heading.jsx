import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Heading = () => {
    const {taskList}=useSelector((state)=>state.crud)
    return (
        <>
            <Grid component="main">
                <Grid item lg={6} sx={{textAlign:"center" ,mt:5}}>
                    <Typography variant="h3" sx={{fontWeight:"bold",color:"navy"}}>Data Management</Typography>
                    <Typography variant="h6" sx={{fontWeight:"bold",color:"navy",mt:3}}>{`Currently ${taskList.length} pending tasks`}</Typography>
                </Grid>

            </Grid>
        </>
    )
}

export default Heading