import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { COMP, DELETE } from "../../redux/Action";
import EditTask from "../EditTask/EditTask";
import "./TaskCard.css";
const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 id={task.istermine ? "UNDO" : "COMP"}>{task.skill}</h1>
      <div className="blocbtn">
        <Button variant="danger" onClick={() => dispatch(DELETE(task.id))}>
          Delete
        </Button>
        <Button variant="warning" onClick={() => dispatch(COMP(task.id))}>
          {task.istermine ? "UNDO" : "COMP"}
        </Button>

        <EditTask task={task} />
      </div>
    </div>
  );
};

export default TaskCard;
