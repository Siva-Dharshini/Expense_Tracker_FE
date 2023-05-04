import Badge from "react-bootstrap/Badge";
import { formatRelative } from "date-fns";

const ExpenseCard = ({ expense }) => {
  const { title, amount, description, date, categories, status } = expense;
  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{amount}</h5>
          <h5>
            <Badge bg="success">{status}</Badge>
          </h5>
        </div>
        <div className="d-flex justify-content-between">
          <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
          <span className="text-secondary">
            {formatRelative(new Date(date), new Date())}
          </span>
        </div>

        <div className="card-text mt-4">
          <p>{description}</p>
          <p className="d-flex align-items-center flex-wrap gap-2">
            {categories.map((category) => (
              <h6 key={category._id}>
                <Badge bg="secondary">{category.title}</Badge>
              </h6>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
