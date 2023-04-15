import React, { ReactNode, useState, useEffect } from "react";
import { eventEmitter } from "../events";
import { globalState, StateType } from "./state";

type contextProviderProps = {
  children: (state: StateType) => ReactNode;
};

const ContextProvider: React.FC<contextProviderProps> = ({ children }) => {
  const [state, setState] = useState<StateType>(globalState);

  const updateState = () => setState({ ...globalState });

  useEffect(() => {
    eventEmitter.on("updateState", updateState);

    return () => {
      eventEmitter.off("theme", updateState);
    };
  }, []);

  return <>{children(state)}</>;
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
