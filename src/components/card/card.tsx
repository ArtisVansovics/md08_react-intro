import './card.scss';

type CardProps = {
  title: string,
  text: string,
}

const Card = () => (
  <div className="Card">
    <h2 className="Card__title">Title</h2>
    <p className="Card__text">
      Description...
    </p>
    <button className="Card__btn">ACTION</button>
  </div>
);

const CardInfo = ({ title, text }: CardProps) => (
  <div className="Card">
    <h2 className="Card__title">{title}</h2>
    <p className="Card__text">
      {text}
    </p>
    <button className="Card__btn">ACTION</button>
  </div>
);

export { Card, CardInfo };
