import React from "react";
import { Context } from "./context";
import { state } from "./context/state";
import { ChildComponent, Button } from "./components";
import { toggleTheme } from "./context/reducers";

const Template: React.FC = () => {
  return (
    <div style={state.theme.themes[state.theme.currentTheme]} className="app">
      <h1>App Component</h1>
      <Button text="Toggle Theme" action={toggleTheme} />
      <ChildComponent text="some text" />
    </div>
  );
};

const App = Context(Template);

export default App;
