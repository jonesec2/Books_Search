import React from "react";

export default function List({ children }) {
  return (
    <div className="list-overflow-container ">
      <ul className="list-group text-left">{children}</ul>
    </div>
  );
}
