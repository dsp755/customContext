import React from 'react';
import { StateProvider, state } from '../../state';

type Props = {
  text: string;
  action: () => void;
};

const Template: React.FC<Props> = ({ text, action }) => (
  <button style={state.theme[1]} type="button" onClick={action}>
    {text}
  </button>
);

const Button = StateProvider(Template);

export { Button };
export default null;
