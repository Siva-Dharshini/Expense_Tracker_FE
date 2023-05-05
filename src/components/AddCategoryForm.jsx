import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";

const AddCategoryForm = ({ show, setShowAddCategoryForm }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/categories",
      { title, description },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS2hhdmluIFNoYW5rYXIiLCJ1c2VybmFtZSI6ImtoYXZpbnNoYW5rYXIiLCJpZCI6IjY0NTNkOGZiZWJkMjEzNjRmNGI0ZDNjNiIsImlhdCI6MTY4MzIxNjY0NH0.8oz5FrGbA0_wseGqIMh0JWfIxbx89TUqMScz5u30YfM",
        },
      }
    );

    if (response.status === 200) {
      setTitle("");
      setDescription("");
      setShowAddCategoryForm(false);
    }
  };

  return (
    <Modal
      size="lg"
      centered
      show={show}
      onHide={() => setShowAddCategoryForm(false)}
    >
      <Modal.Dialog className="w-75 m-auto my-2">
        <Modal.Header closeButton onClick={() => setShowAddCategoryForm(false)}>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter a title"
            className="my-2"
          />
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            as="textarea"
            placeholder="Leave a comment here"
            className="my-2"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={() => setShowAddCategoryForm(false)}
            variant="secondary"
          >
            Close
          </Button>
          <Button onClick={handleSubmit} variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default AddCategoryForm;
