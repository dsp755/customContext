import React, { CSSProperties } from "react";
import { ThemeContext } from "./context";
import { eventEmitter } from "./events";
import { ChildComponent, Button } from "./components";

const App: React.FC = ThemeContext(({ theme, themeStyles }) => {
  return (
    <div style={themeStyles[theme]} className="app">
      <h1>App Component</h1>{" "}
      <Button
        text="Toggle Theme"
        action={() => eventEmitter.emit("toggleTheme")}
      />
      <ChildComponent />
    </div>
  );
});

export default App;
