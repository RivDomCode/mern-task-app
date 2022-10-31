import { useDispatch, useSelector } from "react-redux"
import { addTask, deleteTask, updateTask } from "../store/tasks/taskSlice"

export const useTaskStore = () => {

    const tasks = useSelector(state => state.tasks)

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



    return {
        //properties
        tasks,
        //methods
        startSavingTask,
        startDeletingTask
    }
}