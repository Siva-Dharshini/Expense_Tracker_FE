import Button from "react-bootstrap/Button";
import CategoryDropdown from "./CategoryDropdown";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const AddExpenseForm = ({ show, setShowAddExpenseForm }) => {
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [labels, setLabels] = useState([]);

  return (
    <Modal
      size="lg"
      centered
      show={show}
      onHide={() => setShowAddExpenseForm(false)}
    >
      <Modal.Dialog className="w-75 m-auto my-2">
        <Modal.Header closeButton onClick={() => setShowAddExpenseForm(false)}>
          <Modal.Title>Add Expense</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="d-flex gap-2 my-2">
            <Form.Control
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              placeholder="₹ 600"
            />
            <Form.Control
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
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
          <CategoryDropdown
            selectedLabels={labels}
            setSelectedLabels={setLabels}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={() => setShowAddExpenseForm(false)}
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

export default AddExpenseForm;
