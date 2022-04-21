import './button.scss';

type ButtonProps = {
  text: string
}

const Button = () => (
  <button className="Button">Button</button>
);

const ButtonRed = ({ text }: ButtonProps) => (
  <button className="Button ButtonRed">
    {text}
  </button>
);

export { Button, ButtonRed };
