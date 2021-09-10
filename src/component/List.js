import React from "react";

const List = (props) => {
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id={props.data.id}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${props.data.id}`}
            aria-expanded="false"
            aria-controls={props.data.id}
          >
            {props.data.name}
          </button>
        </h2>
        <div
          id={props.data.id}
          className="accordion-collapse collapse"
          aria-labelledby={props.data.id}
          data-bs-parent="#catAccordion"
        >
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
