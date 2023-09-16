import React from 'react'
import { increment, decrement ,reset} from '../../Redux/Features/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import "./CounterStyle.css"


const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    return (
        <>

            <Container component="main" maxWidth="xs" sx={{ mt: 10 }}>

                <Grid item xs={3}  className='bg_counter' >
                    <Stack  direction="column" spacing={2}  className='text_style'>
                        <Typography variant='h6' sx={{ fontWeight: "bold", mt:  4}}>Reduc Counter Task-1</Typography>
                        <Typography variant='h4' sx={{ fontWeight: "bold", mt: 2 }}>{count}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} className='button_style' sx={{ mt: 3 }} >
                        <Button variant="contained" onClick={() => dispatch(increment())} className='increment_btn' size='small'>+</Button>
                        <Button variant="contained" onClick={() => dispatch(decrement())} className='decrement_btn' size='small'>-</Button>
                        <Button variant="contained" onClick={() => dispatch(reset())} className='reset_btn' size='small'>Reset</Button>

                    </Stack>
                </Grid>

            </Container>




        </>
    )
}

export default Counter