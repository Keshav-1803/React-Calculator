import React, { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import ParentContainer from "./components/ParentContainer";

export default function App() {
  const [data, setData] = useState("");

  function handleClick(val) {
    if (val === "=") {
      setData(eval(data));
    } else if (val === "C") {
      setData("");
    } else if (val === "⌫") {
      let res = data + "";
      setData(res.slice(0, -1));
    } else {
      setData(data + val);
    }
  }

  return (
    <ParentContainer>
      <Display data={data} />
      <Buttons btnClick={handleClick} />
    </ParentContainer>
  );
}
