import Badge from "react-bootstrap/Badge";
import { formatRelative } from "date-fns";

const ExpenseCard = () => {
  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">6000</h5>
          <h5>
            <Badge bg="success">Paid</Badge>
          </h5>
        </div>
        <div className="d-flex justify-content-between">
          <h6 className="card-subtitle mb-2 text-muted">Briyani with family</h6>
          <span className="text-secondary">
            {formatRelative(new Date("2023-04-06"), new Date())}
          </span>
        </div>

        <div className="card-text mt-4">
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
          <p className="d-flex align-items-center flex-wrap gap-2">
            {["label1", "label2", "label3"].map((label, i) => (
              <h6 key={i}>
                <Badge bg="secondary">{label}</Badge>
              </h6>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
