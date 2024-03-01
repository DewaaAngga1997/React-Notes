import React from "react";

export default function TabButton(props) {
  const { children, onSelect, isSelected } = props;

  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
