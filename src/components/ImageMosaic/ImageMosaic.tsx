import { StyledImage, StyledImageMosaic, StyledTitle } from './Styled';
import { IImage } from '../../types/types';

interface IProps {
  images: IImage[];
  albumId: string | undefined;
}

const ImageMosaic = ({ images, albumId }: IProps): JSX.Element => (
  <>
    <StyledTitle>
      {`Mosaic for album: ${albumId}`}
    </StyledTitle>
    <StyledImageMosaic>
      { images.map((image) => <StyledImage key={image.id} src={image.path} />) }
    </StyledImageMosaic>
  </>
);

export { ImageMosaic };
