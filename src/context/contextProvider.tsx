import React, { ReactNode, useState, useEffect } from "react";
import { eventEmitter } from "../events";
import { state, StateType } from "./state";

type contextProviderProps = {
  children: (state: StateType) => ReactNode;
};

const ContextProvider: React.FC<contextProviderProps> = ({ children }) => {
  const [globalState, setGlobalState] = useState<StateType>(state);

  const updateState = () => setGlobalState({ ...state });

  useEffect(() => {
    eventEmitter.on("updateState", updateState);

    return () => {
      eventEmitter.off("theme", updateState);
    };
  }, []);

  return <>{children(globalState)}</>;
};

const Context = <P extends object>(
  Component: React.FC<P & StateType>
): React.FC<P> => {
  return (props: P) => (
    <ContextProvider>
      {(state: StateType) => <Component {...props} {...state} />}
    </ContextProvider>
  );
};

export { Context };
export default null;
