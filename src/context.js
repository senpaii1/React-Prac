import React, { createContext, useCallback, useReducer } from "react";
import { reducer, initialState } from "./reducer";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDataFromChild = useCallback((data) => {
    dispatch({ type: "SET_CHILD_DATA", payload: data });
  }, []);

  return (
    <DataContext.Provider value={{ state, handleDataFromChild }}>
      {children}
    </DataContext.Provider>
  );
};
