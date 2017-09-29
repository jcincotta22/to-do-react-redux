import React from 'react';

const Task = ({Obj, isComplete, Name, deleteTask, putChangeStatus}) => {
  return (
      <div className="row">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" onClick={() => {
            putChangeStatus(Obj, isComplete)}} className="btn">{isComplete ? "Undo" : "Complete" }</button>
          <button type="button" onClick={() => deleteTask(Obj.slug)} className="btn">Delete</button>
        </div>
        <h3 style={{textDecoration: isComplete ? "line-through" : "none"}}>{Name}</h3>
      </div>
  );
};

export default Task;
