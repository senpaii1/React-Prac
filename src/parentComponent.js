import React, { useContext } from "react";
import ChildComponent from "./childComponent";
import { DataContext } from "./context";

function ParentComponent() {
  const { state } = useContext(DataContext);
  return (
    <>
      <h1>Parent Component</h1>
      <p> Data from childData : {state.childData}</p>
      <ChildComponent />
    </>
  );
}

export default ParentComponent;
