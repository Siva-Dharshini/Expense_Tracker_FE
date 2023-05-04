import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddCategoryForm = ({ show, setShowAddCategoryForm }) => {
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
            type="text"
            placeholder="Enter a title"
            className="my-2"
          />
          <Form.Control
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
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default AddCategoryForm;
