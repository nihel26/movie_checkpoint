import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Model = ({movieData,setMovies}) => {
  const [name, setTitle] = useState("")
  const [urlimg, setImage] = useState("")
  const [rate, setRate] = useState(0)
  const [description, setDescription] = useState("")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addmovie =()=>{
    const newmovie = {image:urlimg, title:name, description:description, rating:Number(rate) }
    setMovies([...movieData,newmovie])
    handleClose()
  }
  return (
    <div>
      <Button
        style={{
          backgroundColor: "darkred",
          color: "white",
          border: "1px solid darkred",
          borderRadius: "10px",
          marginTop:"20px"
        }}
        onClick={handleShow}
      >
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" onChange={(e) =>{setTitle(e.target.value)}} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="Enter URL" onChange={(e) =>{setImage(e.target.value)}} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Rate</Form.Label>
            <Form.Control type="text" placeholder="from 1 to 5" onChange ={(e) =>{setRate(e.target.value)}} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter description of movie" onChange ={(e) =>{setDescription(e.target.value)}} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addmovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Model;
