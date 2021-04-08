import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        //executes on click without the arrow fn it would execute on render
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
