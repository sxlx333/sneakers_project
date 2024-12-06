import React from "react";
import "./Products.css";

export const Products = ({ result }) => {
  return (
    <div>
      <section className="card-container">{result}</section>
    </div>
  );
};
