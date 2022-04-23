import { Component } from "react";
import { useState } from "react";

const Cal = () => {
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");
  const [result, setresult] = useState("");

  const add = () => {
    setresult(num1 + num2);
  };
  const substract = () => {
    setresult(num1 - num2);
  };
  const multiply = () => {
    setresult(num1 * num2);
  };

  const divide = () => {
    setresult(num1 / num2);
  };

  return (
    <div>
      <input
        className="cal"
        type="number"
        onChange={(e) => setnum1(e.target.value)}
        value={num1}
      />
      <input
        className="cal"
        type="number"
        onChange={(e) => setnum2(e.target.value)}
        value={num2}
      />

      <input className="cal" type="number" value={result} />
      <button className="cal" title="Add" onClick={this.add}>
        Add
      </button>
      <button className="cal" title="Substract" onClick={this.substract}>
        Substract
      </button>
      <button className="cal" title="multiply" onClick={this.multiply}>
        Multiply
      </button>
      <button className="cal" title="divide" onClick={this.divide}>
        Divide
      </button>
      <button className="cal" title="clear" onClick={this.clear}>
        Clear
      </button>
    </div>
  );
};

export default Cal;
