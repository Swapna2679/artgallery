import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Signup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Signup
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <label>Name:</label>
        <input type="text" name="name"/>
        <br/>
        <label>E-mail</label>
        <input type="email" name="email"/>
        <br/>
        <label>Password</label>
        <input type="password" name="password"/>
        
    </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Signup
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signup;