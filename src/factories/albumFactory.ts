import { IAlbum } from '../types/types';
import { getRandomSeed } from '../utils';

const generateAlbums = (quantity: number): IAlbum[] => {
  const quantityRange = Array.from(Array(quantity).keys());
  const generatedAlbums = quantityRange.map((id: number): IAlbum => ({
    id: id.toString(),
    title: `Album with id: ${id}`,
    thumbnail: `https://picsum.photos/seed/${getRandomSeed()}/400/200`,
  }));
  return generatedAlbums;
};

export { generateAlbums };
