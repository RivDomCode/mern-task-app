import { useTaskStore } from "../hooks/useTaskStore";

export const TaskCard = ({ singleTask }) => {
  const { taskName, comments, _id } = singleTask;

  const { startDeletingTask, setTaskActive } = useTaskStore();

  const handleDelete = (id) => {
    startDeletingTask(id);
  };

  const handleActive = (singleTask) => {
    setTaskActive(singleTask);
    console.log(singleTask);
  };

  return (
    <div className="card p-3 mb-3">
      <div className=" d-flex justify-content-between">
        <div className="text-group p-1">
          <h5>{taskName}</h5>
          <p>{comments}</p>
        </div>

        <div className="btn-group  d-flex justify-content-between h-100">
          <div>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => handleActive(singleTask)}
          >
            Edit
          </button>
        </div>
        <div>
          <button className="btn btn-dark">Completed</button>
        </div>
      </div>
    </div>
  );
};
