import './heading.scss';

type HeadingProps = {
  text: string
}

const Heading = ({ text }: HeadingProps) => (
  <h1 className="Heading">
    {text}
  </h1>
);

export default Heading;
