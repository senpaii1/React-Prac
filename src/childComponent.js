import React, { useContext, useState, memo } from "react";
import { DataContext } from "./context";

function ChildComponent() {
  const { handleDataFromChild } = useContext(DataContext);
  const [inputValue, setInputValue] = useState("");
  const handlInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const senDataToParent = () => {
    handleDataFromChild(inputValue);
  };

  return (
    <>
      <h1>childComponent</h1>
      <input
        type="text"
        name="inputvalue"
        value={inputValue}
        onChange={handlInputChange}
        placeholder="Type something..."
      ></input>
      <button onClick={senDataToParent}>Send data to parent</button>
    </>
  );
}

export default memo(ChildComponent);
