import { Context } from "../../context";
import { Button } from "..";
import { toggleTheme } from "../../context/reducers";
import "./childComponent.css";

const ChildComponent = Context((state) => {
  return (
    <div
      style={state.theme.themes[state.theme.currentTheme]}
      className="sub-component"
    >
      <h1>Child Component</h1>
      <Button text="Toggle Theme" action={toggleTheme} />
    </div>
  );
});

export { ChildComponent };
export default null;
