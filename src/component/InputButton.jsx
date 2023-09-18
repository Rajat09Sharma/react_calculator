import React from "react";

function InputButton(props) {
  function addValue(event) {
    const { value } = event.target;
    props.onAdd(value);
  }
  return <input type="button" value={props.value} onClick={addValue} />;
}

export default InputButton;
