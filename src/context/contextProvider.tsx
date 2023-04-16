import React, { ReactNode, useState, useEffect } from 'react';
import { eventEmitter } from '../events';
import { state } from '.';

type Props = {
  children: (value: number) => ReactNode;
};

const StateUpdater: React.FC<Props> = ({ children }) => {
  const [renderedTimes, setRenderedTimes] = useState<number>(1);

  const updateState = () => setRenderedTimes((prev) => prev + 1);

  useEffect(() => {
    eventEmitter.on('updateState', updateState);

    return () => {
      eventEmitter.off('updateState', updateState);
    };
  }, []);

  // Using renderedTimes variable just to not to leave it unused
  return <>{children(renderedTimes)}</>;
};

const Context =
  <P extends object>(Component: React.FC<P>): React.FC<P> =>
  (props: P) =>
    (
      <StateUpdater>
        {() => <div style={state.theme[0]}>{Component({ ...props })}</div>}
      </StateUpdater>
    );

export { Context };
export default null;
