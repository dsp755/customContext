import { Context } from "../../context";
import { state } from "../../context/state";
import { Button } from "..";
import { toggleTheme } from "../../context/reducers";
import "./childComponent.css";

type Props = {
  text: string;
};

const Template: React.FC<Props> = ({ text }) => {
  return (
    <div
      style={state.theme.themes[state.theme.currentTheme]}
      className="sub-component"
    >
      <h1>Child Component</h1>
      <h2>{text}</h2>
      <Button text="Toggle Theme" action={toggleTheme} />
    </div>
  );
};

const ChildComponent = Context(Template);

export { ChildComponent };
export default null;
