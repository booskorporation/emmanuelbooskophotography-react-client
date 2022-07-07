import { ImageMosaic } from './ImageMosaic';
import { albumsConfig } from '../../config/albums';

const ImageMosaicWithConfig = (): JSX.Element => {
  const { images } = albumsConfig;
  return (
    <ImageMosaic images={images} />
  );
};

export { ImageMosaicWithConfig };
