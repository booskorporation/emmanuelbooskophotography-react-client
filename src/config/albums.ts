import { generateImages } from '../factories/imageFactory';
import { generateAlbums } from '../factories/albumFactory';
import { IAlbum, IImage } from '../types/types';

const albums: IAlbum[] = generateAlbums(5);

const images: IImage[] = generateImages(28);

export const albumsConfig = { albums, images } as const;
