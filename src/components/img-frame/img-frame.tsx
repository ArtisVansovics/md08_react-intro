import './img-frame.scss';

type ImgFrameProps = {
  srcPath: string,
  altName: string,
}

const ImgFrame = ({ srcPath, altName }: ImgFrameProps) => (
  <div className="ImgFrame">
    <img src={srcPath} alt={altName} className="ImgFrame__image" />
  </div>
);

export default ImgFrame;
