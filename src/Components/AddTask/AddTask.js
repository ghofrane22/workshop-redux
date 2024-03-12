import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_task } from "../../Redux/Actions/actions";
import { Form, Button } from "react-bootstrap";
const AddTask = () => {
  const [description, setDescription] = useState("");
  const handleChange = (e) => {
    setDescription(e.target.value);
  };
  const dispatch = useDispatch();
  const handleAdd = () => {
    console.log("click", add_task(description));
    dispatch(add_task(description));
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form.Control
          type="text"
          placeholder="type your task.."
          onChange={handleChange}
          style={{ width: "590px" }}
        />
        <Button variant="success" onClick={handleAdd}>
          Add Task
        </Button>
      </div>
    </>
  );
};

export default AddTask;
