import { TbCurrencyRupee, TbHash, TbMinus, TbPlus } from "react-icons/tb";

import { useState } from "react";

const AddButton = ({ setShowAddExpenseForm, setShowAddCategoryForm }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          style={{
            marginBottom: "7.5rem",
            marginRight: "3.25rem",
            flexDirection: "column",
            gap: "5px",
          }}
          className="position-fixed bottom-0 end-0 d-flex"
        >
          <button
            onClick={() => setShowAddCategoryForm(true)}
            className="btn btn-primary rounded-circle p-3"
          >
            <TbHash size={25} />
          </button>
          <button
            onClick={() => setShowAddExpenseForm(true)}
            className="btn btn-primary rounded-circle p-3"
          >
            <TbCurrencyRupee size={25} />
          </button>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="position-fixed bottom-0 end-0 mb-5 me-5 btn btn-primary rounded-circle p-3"
      >
        {isOpen ? <TbMinus size={30} /> : <TbPlus size={30} />}
      </button>
    </>
  );
};

export default AddButton;
