import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { update_task } from "../../Redux/Actions/actions";

const EditTask = ({ show, handleClose, task }) => {
  const dispatch = useDispatch();
  const [newdescription, setnewdescription] = useState();
  const handleChange = (e) => {
    setnewdescription(e.target.value);
  };
  const handlesave = () => {
    dispatch(update_task({ id: task.id, description: newdescription }));
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          placeholder="type your task.."
          style={{ width: "400px" }}
          onChange={handleChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handlesave}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTask;
