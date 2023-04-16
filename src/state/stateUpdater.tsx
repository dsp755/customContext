import React, { ReactNode, useState, useEffect } from 'react';
import { eventEmitter } from '../events';
import { state } from '.';

type Props = {
  children: (value: number) => ReactNode;
};

const StateUpdater: React.FC<Props> = ({ children }) => {
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

const TemplateWrapper =
  <P extends object>(Component: React.FC<P>): React.FC<P> =>
  (props: P) =>
    (
      <StateUpdater>
        {() => <div style={state.theme[0]}>{Component({ ...props })}</div>}
      </StateUpdater>
    );

export { TemplateWrapper };
export default null;
