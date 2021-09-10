import React from "react";

const List = (props) => {
  return (
    <div>
      <span>ID = {props.data.id}</span>
      <br />
      <span>Name = {props.data.name}</span>
      <br />
      <br />
    </div>
  );
};

export default List;
