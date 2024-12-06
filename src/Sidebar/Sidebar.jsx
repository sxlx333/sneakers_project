import React from "react";
import "./Sidebar.css";
import Category from "./Cartegory/Category";

import { Price } from "./Price/Price";
import Colors from "./Colors/Colors";

export const Sidebar = ({ handleChange }) => {
  return (
    <div>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </div>
  );
};
