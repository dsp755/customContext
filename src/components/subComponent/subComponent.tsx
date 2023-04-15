import { eventEmitter } from "../../events";
import { ThemeContext } from "../../context";
import { Button } from "../";
import "./subComponent.css";

const ChildComponent = ThemeContext(({ theme, themeStyles }) => {
  return (
    <div style={themeStyles[theme]} className="sub-component">
      <h1>Child Component</h1>
      <Button
        text="Toggle Theme"
        action={() => eventEmitter.emit("toggleTheme")}
      />
    </div>
  );
});

export { ChildComponent };
export default null;
