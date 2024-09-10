import React, { useState, useEffect, useCallback } from "react";
import ParentComponent from "../parentComponent";
import { Suspense } from "react";
import axios from "axios";

const Lazy = React.lazy(() => import("../lazy"));

const Counter = () => {
  const [counter, SetCounter] = useState(0);
  const [data, SetData] = useState("");
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("https://catfact.ninja/fact").then((res) => {
          SetData(res.data);
        });
      } catch (error) {
        console.log(error);
      } finally {
        SetLoading(false);
      }
    };
    fetchData();
  }, []);

  const handler = useCallback(() => {
    SetCounter((prevCounter) => prevCounter + 1);
  }, []);
  return (
    <div>
      <button onClick={handler}>Jai Hanuman</button>
      <p>{counter}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Lazy />
      </Suspense>
      <div
        style={{
          display: "flex",
          // flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh", // Use vh (viewport height) for relative sizing
          width: "100%", // Ensure the outer container takes full width
        }}
      >
        <div
          style={{
            border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30vh", // Use vh for height sizing
            width: "50%", // Take up 80% of the parent container's width
            textAlign: "center", // Center the text
          }}
        >
          {loading ? <div>Loading...</div> : data && data.fact}
        </div>
        <div
          style={{
            border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30vh", // Use vh for height sizing
            width: "50%", // Take up 80% of the parent container's width
            textAlign: "center", // Center the text
          }}
        >
          {loading ? <div>Loading...</div> : data.fact}
        </div>
      </div>
      <ParentComponent />
    </div>
  );
};

export default Counter;
