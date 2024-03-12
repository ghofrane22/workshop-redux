import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { delete_task, done_task } from "../../Redux/Actions/actions";
import EditTask from "../EditTask/EditTask";

const TaskItems = ({ task }) => {
  const dispatch = useDispatch();
  const handleDone = (id) => {
    dispatch(done_task(id));
  };
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "66PX",
          height: "153px",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>{task.description}</Card.Text>
            <Button variant="warning" onClick={() => handleDone(task.id)}>
              {task && task.done ? "Not Done" : "Done"}
            </Button>
            <Button variant="primary" onClick={() => handleShow(show)}>
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => dispatch(delete_task(task.id))}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
      <EditTask show={show} handleClose={handleClose} task={task} />
    </>
  );
};

export default TaskItems;
