import "./styles.css";
import { useState } from "react";

export default function App() {
  const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "C",
    ".",
    "=",
  ];

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    console.log("value is ", e.target.id);
    const id = e.target.id;
    if (id === "C") {
      setValue("");
    } else if (id === "=") {
      handleSubmit();
    } else {
      setValue((val) => val + id);
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    try {
      const ans = eval(value);
      setValue(ans);
    } catch (err) {
      alert("Invalid Inputs");
    }
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} type="text" />
      </form>
      <div className="container" onClick={handleClick}>
        {arr.map((item, idx) => {
          return (
            <button id={item} key={idx} className="cell">
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
