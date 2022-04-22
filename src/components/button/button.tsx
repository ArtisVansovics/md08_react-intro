import './button.scss';

type ButtonProps = {
  text: string
}

type ButtonDetailedProps = {
  id: string,
  title: string,
  backgroundColor: string,
}

const Button = () => (
  <button className="Button">Button</button>
);

const ButtonRed = ({ text }: ButtonProps) => (
  <button className="Button ButtonRed">
    {text}
  </button>
);

const ButtonDetailed = ({ id, title, backgroundColor }: ButtonDetailedProps) => (
  <button
    className="Button"
    id={id}
    style={{ backgroundColor }}
  >
    {title}
  </button>
);

export { Button, ButtonRed, ButtonDetailed };
