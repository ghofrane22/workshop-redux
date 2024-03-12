import React from "react";
import { useSelector } from "react-redux";

import TaskItems from "../TaskItems/TaskItems";

const TaskList = () => {
  const { Tasks } = useSelector((state) => state);
  console.log(Tasks);
  return (
    <div>
      {Tasks.map((task, index) => {
        return <TaskItems task={task} />;
      })}
    </div>
  );
};

export default TaskList;
