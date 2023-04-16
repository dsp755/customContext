import React from 'react';
import { StateUpdater, state } from './state';
import { ChildComponent, Button } from './components';
import { toggleTheme, toggleSharedText } from './state/reducers';
import './app.css';

const Template: React.FC = () => (
  <div className="app">
    <h1>App Component</h1>
    <h2>{state.sharedText[0]}</h2>
    <div className="button-wrapper">
      <Button text="Toggle Theme" action={toggleTheme} />
      <Button text="Toggle Shared Text" action={toggleSharedText} />
    </div>
    <ChildComponent text="Some text from child component props" />
    {/* {ChildComponent({ text: "Some text from child component props" })} */}
  </div>
);

const App = StateUpdater(Template);

export default App;
