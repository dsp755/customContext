import React from 'react';
import { Context } from '../../context';
import { Button } from '..';
import { toggleTheme } from '../../context/reducers';
import './childComponent.css';

type Props = {
  text: string;
};

const Template: React.FC<Props> = ({ text }) => (
  <div className="sub-component">
    <h1>Child Component</h1>
    <h2>{text}</h2>
    <Button text="Toggle Theme" action={toggleTheme} />
  </div>
);

const ChildComponent = Context(Template);

export { ChildComponent };
export default null;
