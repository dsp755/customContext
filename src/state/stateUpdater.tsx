import React, { ReactNode, useState, useEffect } from 'react';
import { eventEmitter } from '../events';
import { state } from '.';

type Props = {
  children: (value: number) => ReactNode;
};

const ComponentWrapper: React.FC<Props> = ({ children }) => {
  const [renderedTimes, setRenderedTimes] = useState<number>(1);

  useEffect(() => {
    const updateState = () => setRenderedTimes((prev) => prev + 1);

    eventEmitter.on('updateState', updateState);

    return () => {
      eventEmitter.off('updateState', updateState);
    };
  }, []);

  // Using renderedTimes variable just to not to leave it unused
  return <>{children(renderedTimes)}</>;
};

const StateUpdater =
  <P extends object>(Component: React.FC<P>): React.FC<P> =>
  (props: P) =>
    (
      <ComponentWrapper>
        {() => <div style={state.theme[0]}>{Component({ ...props })}</div>}
      </ComponentWrapper>
    );

export { StateUpdater };
export default null;
