import { useNavigate } from "react-router-dom";
import React from "react";

function Product() {
  const navigate = useNavigate();

  return (
    <div>
      Product
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product{" "}
      </button>
    </div>
  );
}

export default Product;
