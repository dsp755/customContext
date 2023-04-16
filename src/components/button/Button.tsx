import React from 'react';
import { StateUpdater, state } from '../../state';

type Props = {
  text: string;
  action: () => void;
};

const Template: React.FC<Props> = ({ text, action }) => (
  <button style={state.theme[1]} type="button" onClick={action}>
    {text}
  </button>
);

const Button = StateUpdater(Template);

export { Button };
export default null;
