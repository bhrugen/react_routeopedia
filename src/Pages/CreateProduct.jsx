import React from "react";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const navigate = useNavigate();
  return (
    <div>
      CreateProduct
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
    </div>
  );
}

export default CreateProduct;
