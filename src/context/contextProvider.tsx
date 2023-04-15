import React, { ReactNode, useState, useEffect } from 'react';
import { eventEmitter } from '../events';
import { state, StateType } from './state';

type Props = {
  children: (state: StateType) => ReactNode;
};

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [globalState, setGlobalState] = useState<StateType>(state);

  const updateState = () => setGlobalState({ ...state });

  useEffect(() => {
    eventEmitter.on('updateState', updateState);

    return () => {
      eventEmitter.off('theme', updateState);
    };
  }, []);

  return <>{children(globalState)}</>;
};

const Context =
  <P extends object>(Component: React.FC<P & StateType>): React.FC<P> =>
  (props: P) =>
    (
      <ContextProvider>
        {(state: StateType) => <Component {...props} {...state} />}
      </ContextProvider>
    );

export { Context };
export default null;
