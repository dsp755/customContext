import React, { ReactNode, useState, useEffect } from 'react';
import { eventEmitter } from '../events';
import { state } from './state';

type Props = {
  children: (props: any) => ReactNode;
};

const ComponentWrapper: React.FC<Props> = ({ children }) => {
  const [globalState, setGlobalState] = useState<any>(state);

  useEffect(() => {
    const updateState = () => setGlobalState({ ...state });

    eventEmitter.on('updateState', updateState);

    return () => {
      eventEmitter.off('updateState', updateState);
    };
  }, []);

  // Using renderedTimes variable just to not to leave it unused
  return <>{children(globalState)}</>;
};

const StateProvider =
  <P extends object>(Component: React.FC<P>): React.FC<P> =>
  (props: P) =>
    (
      <ComponentWrapper>
        {(state) => (
          <div style={state.theme[0]}>{Component({ ...props, state })}</div>
        )}
      </ComponentWrapper>
    );

export { StateProvider };
export default null;
