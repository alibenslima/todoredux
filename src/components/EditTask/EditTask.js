import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { EDIT } from "../../redux/Action";

const EditTask = ({ task }) => {
  const [show, setShow] = useState(false);
  const [valuetext, setValuetext] = useState(task.skill);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handelEdit = (e) => {
    e.preventDefault();
    const newskill = {
      id: task.id,
      skill: valuetext,
      istermine: task.istermine,
    };
    dispatch(EDIT(newskill));
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Change
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit_Skill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handelEdit}>
            <input
              type="text"
              value={valuetext}
              onChange={(e) => setValuetext(e.target.value)}
            />
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditTask;
