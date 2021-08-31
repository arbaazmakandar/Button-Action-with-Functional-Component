import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [state, setState] = React.useState("");
  const handleClick = () => {
    const text =
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
    setState(text);
  };
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button onClick={handleClick} id="click">
        Click me
      </button>
      {state ? <p id="para ">{state}</p> : ""}
    </div>
  );
}

export default App;
