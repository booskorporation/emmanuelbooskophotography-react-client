import { IAlbum, IImage } from '../types/types';

const getRandomSeed = () => Math.floor(Math.random() * 999999);
const generateImages = (quantity: number): IImage[] => {
  const quantityRange = Array.from(Array(quantity).keys());
  const generatedImages = quantityRange.map((id: number): IImage => ({
    id: id.toString(),
    path: `https://picsum.photos/seed/${getRandomSeed()}/200/200`,
  }));
  return generatedImages;
};

const generateAlbums = (quantity: number): IAlbum[] => {
  const quantityRange = Array.from(Array(quantity).keys());
  const generatedAlbums = quantityRange.map((id: number): IAlbum => ({
    id: id.toString(),
    title: `Album with id: ${id}`,
    thumbnail: `https://picsum.photos/seed/${getRandomSeed()}/400/200`,
  }));
  return generatedAlbums;
};

export { generateImages, generateAlbums };
