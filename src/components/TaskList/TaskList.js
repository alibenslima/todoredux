import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "../TaskCard/TaskCard";

const TaskList = () => {
  const { tasks, filter } = useSelector((state) => state);
  return (
    <div>
      {filter
        ? tasks
            .filter((el) => el.istermine === false)
            .map((el) => <TaskCard key={el.id} task={el} />)
        : tasks.map((el) => <TaskCard key={el.id} task={el} />)}
    </div>
  );
};

export default TaskList;
