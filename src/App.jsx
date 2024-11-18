import { useState } from "react";
import style from "./App.module.css";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const buttonItems = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const [initialInput, setInititalInput] = useState("");

  const buttonClicked = (buttonText) => {
    if (buttonText === "C") {
      setInititalInput("");
    } else if (buttonText === "=") {
      const result = eval(initialInput);
      console.log(result);
      setInititalInput(result);
    } else {
      const newButton = initialInput + buttonText;
      setInititalInput(newButton);
    }
  };

  return (
    <>
      <div className={style.calculator}>
        <Display input={initialInput}></Display>
        <div className={style.buttonContainer}>
          <Button
            btn={buttonItems}
            handleButton={(event) => buttonClicked(event)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
