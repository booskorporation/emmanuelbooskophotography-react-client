import { useParams } from 'react-router-dom';
import { StyledImage, StyledImageMosaic, StyledTitle } from './Styled';
import { IImage } from '../../types/types';

interface IProps {
  images: IImage[];
}

const ImageMosaic = ({ images }: IProps): JSX.Element => {
  const { albumId } = useParams();
  return (
    <>
      <StyledTitle>
        {`Mosaic for albumId: ${albumId}`}
      </StyledTitle>
      <StyledImageMosaic>
        { images.map((image) => <StyledImage key={image.id} src={image.path} />) }
      </StyledImageMosaic>
    </>
  );
};

export { ImageMosaic };
