import React from 'react';
import { StateProvider } from './state';
import { ChildComponent, Button } from './components';
import { toggleTheme, toggleSharedText } from './state/reducers';
import './app.css';

type Props = {
  state?: any;
};

const Template: React.FC<Props> = ({ state }) => (
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

const App = StateProvider(Template);

export default App;
