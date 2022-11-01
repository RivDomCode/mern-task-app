
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
        taskList: [],
        activeTask: null,
    },
    reducers: {
        addTask: (state, { payload }) => {
            state.taskList.push(payload)
        },
        deleteTask: (state, { payload })=> {
           state.taskList = state.taskList.filter(task => task._id !== payload);
          },
        putTaskActive: (state, { payload}) => {
            state.activeTask = payload
        },
        updateTask: (state, {payload}) => {
            state.taskList= state.taskList.map(task => {
                if(task._id === payload._id){   //hago una copia de la lista de todos
                    return payload;             //el id que coincidad es el que voy a actualizar
                }
        
                return task
            })
        }
    },


});

export default taskSlice;

export const { addTask, deleteTask, putTaskActive, updateTask, taskList, activeTask } = taskSlice.actions;
