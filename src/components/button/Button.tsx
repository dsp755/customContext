import React from 'react';

type Props = {
  text: string;
  action: () => void;
};

const Button: React.FC<Props> = ({ text, action }) => (
  <button type="button" onClick={action}>
    {text}
  </button>
);

export { Button };
export default null;
