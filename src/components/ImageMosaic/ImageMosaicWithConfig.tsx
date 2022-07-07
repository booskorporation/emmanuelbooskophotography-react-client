import { useParams } from 'react-router-dom';
import { ImageMosaic } from './ImageMosaic';
import { albumsConfig } from '../../config/albums';

const ImageMosaicWithConfig = (): JSX.Element => {
  const { images } = albumsConfig;
  const { albumId } = useParams();
  return (
    <ImageMosaic images={images} albumId={albumId} />
  );
};

export { ImageMosaicWithConfig };
