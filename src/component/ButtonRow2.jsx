import React from "react";
import InputButton from "./InputButton";

function ButtonRow2(props) {
  return (
    <div>
      <InputButton value={props.firstBtnValue} onAdd={props.onClick} />
      <InputButton value={props.secondBtnValue} onAdd={props.onClick} />
      <InputButton value={props.thirdBtnValue} onAdd={props.onClick} />
      <InputButton value={props.fourthBtnValue} onAdd={props.onClick} />
      <InputButton value={props.fifthBtnValue} onAdd={props.onClick} />
    </div>
  );
}

export default ButtonRow2;
