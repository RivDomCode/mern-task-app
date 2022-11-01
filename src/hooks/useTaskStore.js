import { useDispatch, useSelector } from "react-redux"
import { addTask, deleteTask, putTaskActive, updateTask } from "../store/tasks/taskSlice"

export const useTaskStore = () => {

    const tasks = useSelector(state => state.tasks);
   const { taskList, activeTask } = tasks;
    const dispatch = useDispatch()


    const startSavingTask = async(task) => {
        if(task._id) {
            dispatch(updateTask({...task}))
        }
        dispatch(addTask({...task, _id: new Date().getTime()}))
    }

    const startDeletingTask =async(id) => {
        dispatch(deleteTask(id))
    }

    const setTaskActive = (task) => {
        dispatch(putTaskActive(task))
    }



    return {
        //properties
        taskList,
        activeTask,
        //methods
        startSavingTask,
        startDeletingTask,
        setTaskActive
    }
}