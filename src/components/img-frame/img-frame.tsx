import './img-frame.scss';

type ImgFrameProps = {
  src: string
}

const ImgFrame = ({ src }: ImgFrameProps) => (
  <div className="ImgFrame">
    <img src={src} alt="" className="ImgFrame__image" />
  </div>
);

export default ImgFrame;
