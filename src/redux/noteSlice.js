import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    //data will store in local storage of browser and it will return stingyfy array "["{"title":"One"}"]" and parser convert it into jsArray here
    notes : localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []
}


const noteSlice = createSlice({
    name:"noteSlice",
    initialState,
    reducers:{
        addToNote:(state, action)=>{
            const note = action.payload
            //add check for alredy existed note existed 
            // console.log(state.notes);                                                     //state.notes => array / state => obj
            // console.log(initialState);
            if (!note.title || !note.content) {
                return toast(`Please add content`)
            }
            
            //store on central store
            state.notes.push(note)
            //store on local storage
            localStorage.setItem('notes',JSON.stringify(state.notes))
            toast.success("Note created successfully!🥳");
        },
        updateToNote:(state, action)=>{
            const note = action.payload;
            const index = state.notes.findIndex((item) => item._id === note._id)

            if (index >= 0) {
                state.notes[index] = note;
                localStorage.setItem('notes',JSON.stringify(state.notes))
                toast.success("Note Updated!🥳")
            }
        },
        resetAllNotes:(state, action)=>{
            state.notes = [];
            localStorage.removeItem('notes')
        },
        removeFromNote:(state, action)=>{
            const noteId = action.payload;
            const index = state.notes.findIndex((item)=>item._id === noteId )

            if (index >= 0) {
                state.notes.splice(index, 1);

                localStorage.setItem('notes',JSON.stringify(state.notes))
                toast.success('Note Deleted!')
            }
        }
    }
})

export const {addToNote, updateToNote, resetAllNotes, removeFromNote} = noteSlice.actions
export default noteSlice.reducer
