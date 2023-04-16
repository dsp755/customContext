import React from 'react';
import { StateUpdater, state } from '../../state';
import { Button } from '..';
import { toggleTheme, toggleSharedText } from '../../state/reducers';
import './childComponent.css';

type Props = {
  text: string;
};

const Template: React.FC<Props> = ({ text }) => (
  <div className="sub-component">
    <h1>Child Component</h1>
    <h2>{text}</h2>
    <h2>{state.sharedText[0]}</h2>
    <div className="button-wrapper">
      <Button text="Toggle Theme" action={toggleTheme} />
      <Button text="Toggle Shared Text" action={toggleSharedText} />
    </div>
  </div>
);

const ChildComponent = StateUpdater(Template);

export { ChildComponent };
export default null;
