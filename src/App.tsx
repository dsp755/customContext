import React from 'react';
import { Context } from './context';
import { ChildComponent, Button } from './components';
import { toggleTheme } from './context/reducers';

const Template: React.FC = () => (
  <div className="app">
    <h1>App Component</h1>
    <Button text="Toggle Theme" action={toggleTheme} />
    <ChildComponent text="Some text from child component props" />
    {/* {ChildComponent({ text: "Some text from child component props" })} */}
  </div>
);

const App = Context(Template);

export default App;
