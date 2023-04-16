import React, { ReactNode, useState, useEffect } from 'react';
import { eventEmitter } from '../events';
import { state } from '.';
import { StateType } from './types';

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
        {(state: StateType) => (
          <div style={state.theme[0]}>{Component({ ...props, ...state })}</div>
        )}
      </ContextProvider>
    );

export { Context };
export default null;
