import React from "react";
import Detail from "./Detail";

const List = (props) => {
  const nameWithoutSpace = props.data.name.split(" ").join("");

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={props.data.id}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${nameWithoutSpace}`}
          aria-expanded="false"
          aria-controls={nameWithoutSpace}
        >
          <strong>{props.data.name}</strong>
        </button>
      </h2>
      <div
        id={nameWithoutSpace}
        className="accordion-collapse collapse"
        aria-labelledby={props.data.id}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <Detail data={props.data} />
        </div>
      </div>
    </div>
  );
};

export default List;
