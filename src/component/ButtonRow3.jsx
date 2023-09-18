import React from "react";
import InputButton from "./InputButton";

function ButtonRow3(props) {
  return (
    <div>
      <InputButton value={props.firstBtnValue || ""} onAdd={props.onClick} />
      <InputButton value={props.secondBtnValue} onAdd={props.onClick} />
      <InputButton value={props.thirdBtnValue} onAdd={props.onClick} />
      <InputButton value={props.fifthBtnValue} onAdd={props.onEval} />
    </div>
  );
}

export default ButtonRow3;
