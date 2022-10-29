import React from "react";

export const TaskCard = ({ singleTask }) => {
  const { taskName, comments } = singleTask;
  return (
    <div className="card p-3">
      <div className=" d-flex justify-content-between">
        <div className="text-group p-1">
          <h5>{taskName}</h5>
          <p>{comments}</p>
        </div>

        <div className="btn-group  d-flex justify-content-between h-100">
          <div>
            {" "}
            <button className="btn btn-danger">Delete</button>
          </div>
          <div>
            {" "}
            <button className="btn btn-primary">Edit</button>
          </div>
          <div>
            {" "}
            <button className="btn btn-dark">Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
};
