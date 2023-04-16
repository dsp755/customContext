import React from 'react';
import { Context, state } from '../../context';

type Props = {
  text: string;
  action: () => void;
};

const Template: React.FC<Props> = ({ text, action }) => (
  <button style={state.theme[1]} type="button" onClick={action}>
    {text}
  </button>
);

const Button = Context(Template);

export { Button };
export default null;
