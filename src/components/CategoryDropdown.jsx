import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const CategoryDropdown = ({ selectedLabels, setSelectedLabels }) => {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const getAllCategories = async () => {
      const response = await axios.get("http://localhost:3000/api/categories", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS2hhdmluIFNoYW5rYXIiLCJ1c2VybmFtZSI6ImtoYXZpbnNoYW5rYXIiLCJpZCI6IjY0NTNkOGZiZWJkMjEzNjRmNGI0ZDNjNiIsImlhdCI6MTY4MzIxNjY0NH0.8oz5FrGbA0_wseGqIMh0JWfIxbx89TUqMScz5u30YfM",
        },
      });

      if (response.status === 200) {
        setLabels(response.data);
      }
    };

    getAllCategories();
  }, []);

  return (
    <div className="mt-4">
      <div className="d-flex gap-2 flex-wrap">
        {selectedLabels.map((selectedLabel) => (
          <h5 key={selectedLabel}>
            <Badge bg="secondary">
              {labels.find((label) => label._id === selectedLabel)?.title}
            </Badge>
          </h5>
        ))}
      </div>
      <Dropdown>
        <Dropdown.Toggle
          className="w-100 border border-2"
          variant="white"
          id="dropdown-basic"
        >
          Select Categories
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-100">
          {labels
            .filter((label) => !selectedLabels.includes(label._id))
            .map((label) => (
              <Dropdown.Item
                onClick={() =>
                  setSelectedLabels((prev) => [...prev, label._id])
                }
                key={label._id}
              >
                {label.title}
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CategoryDropdown;
