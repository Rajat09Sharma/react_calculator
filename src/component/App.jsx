import React, { useState } from "react";
import ButtonRow1 from "./ButtonRow1";
import ButtonRow2 from "./ButtonRow2";
import ButtonRow3 from "./ButtonRow3";
function App() {
  const [displayValue, setDisplayValue] = useState("");

  function displayNumber(event) {
    const value = event;
    // console.log(value);
    setDisplayValue((prevs) => {
      return prevs + value;
    });
  }

  function allClear() {
    setDisplayValue("");
  }
  function delteLastNumber() {
    setDisplayValue((prevs) => {
      return prevs.slice(0, -1);
    });
  }

  function calculate() {
    // setDisplayValue((prevs) => {
    //   const result = eval(prevs);
    //   return result;
    // });
    try {
      setDisplayValue(eval(displayValue));
    } catch (error) {
      setDisplayValue("ERROR");
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div>
            <input
              type="text"
              name="display"
              value={displayValue}
              onChange={(e) => {
                setDisplayValue(e.target.value);
              }}
            />
          </div>
          <ButtonRow1
            firstBtnValue="7"
            secondBtnValue="8"
            thirdBtnValue="9"
            fourthBtnValue="AC"
            fifthBtnValue="DE"
            onClick={displayNumber}
            onAllClear={allClear}
            onDeleteOne={delteLastNumber}
          />
          <ButtonRow2
            firstBtnValue="4"
            secondBtnValue="5"
            thirdBtnValue="6"
            fourthBtnValue="/"
            fifthBtnValue="*"
            onClick={displayNumber}
          />
          <ButtonRow2
            firstBtnValue="1"
            secondBtnValue="2"
            thirdBtnValue="3"
            fourthBtnValue="+"
            fifthBtnValue="-"
            onClick={displayNumber}
          />
          <ButtonRow3
            firstBtnValue="."
            secondBtnValue="0"
            thirdBtnValue="00"
            fifthBtnValue="="
            onClick={displayNumber}
            onEval={calculate}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
