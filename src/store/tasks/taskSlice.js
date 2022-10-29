
import { createSlice } from '@reduxjs/toolkit';

// const tempTask = {
// //     _id: new Date().getTime(),
// //     taskName:"Walk the dog",
// //     comments:"Do this before midnight",
// // 	completed: false,
// //     user:{
// //         _id:1232,
// //         userName: "Antojitos"
// //     }
// // }


export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        taskList: ["hola"]
    },
    reducers: {
        addTask: (state, { payload }) => {
            console.log(state)
        },
    }
});

export default taskSlice;

export const { addTask, taskList } = taskSlice.actions;
