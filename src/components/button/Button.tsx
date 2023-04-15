type Props = {
  text: string;
  action: () => void;
};

const Button = ({ text, action }: Props) => (
  <button onClick={action}>{text}</button>
);

export { Button };
export default null;
