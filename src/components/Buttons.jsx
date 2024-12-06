import React from "react";

export default function Buttons({ onClickHandler, value, title }) {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
}
