import { useState } from "react";
import "./App.css";

function App() {
  let [sum, setSum] = useState("");
  let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");
  let [sign, setSign] = useState("+");

  const parseNum1 = (event) => {
    setNum1(event.target.value);
  };

  const parseNum2 = (event) => {
    setNum2(event.target.value);
  };

  const handleSignChange = (newSign) => {
    setSign(newSign);
  };

  const calculate = () => {
    switch (sign) {
      case "+":
        setSum(parseInt(num1) + parseInt(num2));
        break;
      case "-":
        setSum(parseInt(num1) - parseInt(num2));
        break;
      case "*":
        setSum(parseInt(num1) * parseInt(num2));
        break;
      case "/":
        setSum(parseInt(num1) / parseInt(num2));
        break;
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <label htmlFor="Num1">Number 1</label>
      <br></br>
      <input id="Num1" onChange={parseNum1}></input>
      <br></br>
      <br></br>

      <label htmlFor="Num2">Number 2</label>
      <br></br>

      <input id="Num2" onChange={parseNum2}></input>
      <br></br>
      <br></br>

      <button onClick={() => handleSignChange("+")}>+</button>
      <button onClick={() => handleSignChange("-")}>-</button>
      <button onClick={() => handleSignChange("*")}>*</button>
      <button onClick={() => handleSignChange("/")}>/</button>
      <br></br>

      <button onClick={calculate}>=</button>
      <p>Result: {sum}</p>
    </>
  );
}

export default App;
