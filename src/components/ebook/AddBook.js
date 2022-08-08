import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const AddBook = ({ save }) => {
  const [ISBN, setISBN] = useState("");
  const [name, setName] = useState("");
 // const [author_name, setName] = useState("");

  const [img, setImage] = useState("");
  const [type, setType] = useState("");
  const [pubication_year, setPublicationYear] = useState("");
  const [buyPrice, setBuyPrice] = useState(0);
  const [borrowPrice, setBorrowPrice] = useState(0);

  const isFormFilled = () => ISBN&& borrowPrice&& buyPrice&& img&& name&& pubication_year&& type;
  

  //borrowPrice, author_name
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        onClick={handleShow}
        variant="dark"
        className="rounded-pill px-0"
        style={{ width: "38px" }}
      >
        <i className="bi bi-plus"></i>
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Book</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="inputName"
              label="Book name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter name of book"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputISBN"
              label="Book ISBN"
              className="mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => {
                  setISBN(e.target.value);
                }}
              />
            </FloatingLabel>
            
            <FloatingLabel
              controlId="inputUrl"
              label="Image URL"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Image URL"
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputDescription"
              label="Type"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="type"
                style={{ height: "80px" }}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputLocation"
              label="Publication Year"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Publication Year"
                onChange={(e) => {
                  setPublicationYear(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputPrice"
              label="buy Price"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="BuyPrice"
                onChange={(e) => {
                  setBuyPrice(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputPrice"
              label="Borrow Price"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="borrowPrice"
                onChange={(e) => {
                  setBorrowPrice(e.target.value);
                }}
              />
            </FloatingLabel>
          </Modal.Body>
        </Form>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="dark"
            disabled={!isFormFilled()}
            onClick={() => {
              save({
                ISBN,
                name,
                img,
                type,
                pubication_year,
                buyPrice,
              });
              handleClose();
            }}
          >
            Save book
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

AddBook.propTypes = {
  save: PropTypes.func.isRequired,
};

export default AddBook;