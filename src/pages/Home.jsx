import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskCard } from "../components/taskCard";
import { useForm } from "../hooks/useForm";
import { addTask } from "../store/tasks/taskSlice";

const initialForm = {
  taskName:"",
  comments:"",
  completed: false,
}

export const Home = () => {

  const { inputValues, reset, handleInputChange } = useForm(initialForm);
  const { taskName, comments } = inputValues;

  const tasks = useSelector(state => state.tasks.taskList);
  const dispatch = useDispatch();

  const handleSubmit = () =>{
    e.preventDefault();

    dispatch(addTask({...inputValues, _id:new Date().getTime()}))
  }



  return (
    <div className="min-vh-100">

      <nav className="navbar bg-dark text-light text-center p-2">
        <h1 className="m-auto">TASK APP</h1>
        <button className="btn btn-outline-danger">LOGOUT</button>
      </nav>

      <form className='w-75 p-4 m-auto' onSubmit={handleSubmit}>
        <h2 className='text-center text-dark mb-3'>Add your taks below</h2>
        <div className="form-floating mb-3 justify-content-center">
          <input type="text" className="form-control" id="floatingInput" value={taskName} name="taskName" onChange={handleInputChange}/>
          <label for="floatingInput">Task</label>
        </div>
        <div className="form-floating">
          <textarea type="text" className="form-control" id="floatingPassword" value={comments} name="comments" onChange={handleInputChange}/>
          <label for="floatingPassword">Comments</label>
        </div>
        <button className='btn btn-outline-dark w-100 mt-3 text-uppercase fw-bold'>Add to list</button>
      </form>
      <div className="p-4">
        {
          tasks.map(singleTask => (
            <TaskCard key={singleTask._id} singleTask={singleTask}/>
          ))
        }
      </div>
    </div>
  );
};
