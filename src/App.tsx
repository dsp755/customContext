import React, { CSSProperties } from "react";
import { Context } from "./context";
import { eventEmitter } from "./events";
import { ChildComponent, Button } from "./components";
import { toggleTheme } from "./context/reducers";

const App: React.FC = Context((state) => {
  return (
    <div style={state.theme.themes[state.theme.currentTheme]} className="app">
      <h1>App Component</h1>
      <Button text="Toggle Theme" action={toggleTheme} />
      <ChildComponent />
    </div>
  );
});

export default App;
