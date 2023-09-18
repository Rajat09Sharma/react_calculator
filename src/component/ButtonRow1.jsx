import React from "react";
import InputButton from "./InputButton";

function ButtonRow(props) {
  // function handleClick(event) {
  //   const value = event.target.value;
  //   props.onClick(value);
  // }
  return (
    <div>
      <InputButton value={props.firstBtnValue} onAdd={props.onClick} />
      <InputButton value={props.secondBtnValue} onAdd={props.onClick} />
      <InputButton value={props.thirdBtnValue} onAdd={props.onClick} />
      <InputButton value={props.fourthBtnValue} onAdd={props.onAllClear} />
      <InputButton value={props.fifthBtnValue} onAdd={props.onDeleteOne} />
    </div>
  );
}

export default ButtonRow;
