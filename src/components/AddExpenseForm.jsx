import Button from "react-bootstrap/Button";
import CategoryDropdown from "./CategoryDropdown";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const AddExpenseForm = ({ show, setShowAddExpenseForm }) => {
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [labels, setLabels] = useState([]);

  const { currentUser } = useAuth();

  const handleSubmit = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/expenses",
      {
        amount,
        title,
        description,
        date,
        categories: labels,
        status: "paid",
      },
      {
        headers: {
          Authorization: `Bearer ${currentUser.token}`,
        },
      }
    );

    if (response.status === 200) {
      setAmount(0);
      setDate(new Date().toISOString().slice(0, 10));
      setTitle("");
      setDescription("");
      setLabels([]);
      setShowAddExpenseForm(false);
    }
  };

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
          <Button onClick={handleSubmit} variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default AddExpenseForm;
