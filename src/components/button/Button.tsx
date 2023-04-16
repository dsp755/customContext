import React from 'react';
import { TemplateWrapper, state } from '../../state';

type Props = {
  text: string;
  action: () => void;
};

const Template: React.FC<Props> = ({ text, action }) => (
  <button style={state.theme[1]} type="button" onClick={action}>
    {text}
  </button>
);

const Button = TemplateWrapper(Template);

export { Button };
export default null;
