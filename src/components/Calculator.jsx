import React, { useState } from 'react';
import './Calculator.css';
import CalculatorButton from './CalculatorButton';

function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setDisplay("0");
    } else if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay((prev) => (prev === "0" ? value : prev + value));
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "C", "0", "=", "+"
  ];

  function handleButtonClick2(value) {
    console.log(value);
  }

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="button-grid">
        {buttons.map((button) => (
          <CalculatorButton
            value={button}
            onClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
