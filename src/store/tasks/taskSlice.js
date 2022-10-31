
import { createSlice } from '@reduxjs/toolkit';

// const tempTask = {
//     _id: new Date().getTime(),
//     taskName:"Walk the dog",
//     comments:"Do this before midnight",
// 	completed: false,
//     user:{
//         _id:1232,
//         userName: "Antojitos"
//     }
// }


export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        taskList: []
    },
    reducers: {
        addTask: (state, { payload }) => {
            state.taskList.push(payload)
        },
        updateTask: (state, {payload}) =>{
            state.taskList = state.taskList(task => {
                if(task._id === payload._id){
                    return payload
                }

                return task
            })
        },
        deleteTask: (state, { payload })=> {
           state.taskList = state.taskList.filter(task => task._id !== payload);
          }
    },


});

export default taskSlice;

export const { addTask, deleteTask, updateTask, taskList } = taskSlice.actions;
