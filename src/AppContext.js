import React, { createContext, useCallback, useContext, useState } from "react";
import { node, object } from "prop-types";

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ initialState, children }) => {
  const [state, updateState] = useState(initialState);
  const setState = useCallback(
    (newState) =>
      updateState((previousState) => ({ ...previousState, ...newState })),
    []
  );
  const value = { state, setState, updateState };

  return <Provider {...{ children, value }} />;
};

AppProvider.propTypes = {
  initialState: object,
  children: node,
};

AppProvider.defaultProps = {
  initialState: {},
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
