import { configureStore } from '@reduxjs/toolkit'
import noteReducer from './noteSlice.js'

const store = configureStore({
    reducer:{
        noteStore:noteReducer,
    }
})

export default store