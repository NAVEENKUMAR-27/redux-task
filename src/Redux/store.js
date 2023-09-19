import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counterSlice"
import taskreducer from './Features/crudSlice'

export const store=configureStore({
    reducer:{
        counter:counterReducer,
        crud:taskreducer
    }
})