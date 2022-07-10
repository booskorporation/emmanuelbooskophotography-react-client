import { IImage } from '../types/types';
import { getRandomSeed } from '../utils';

const generateImages = (quantity: number): IImage[] => {
  const quantityRange = Array.from(Array(quantity).keys());
  const generatedImages = quantityRange.map((id: number): IImage => ({
    id: id.toString(),
    path: `https://picsum.photos/seed/${getRandomSeed()}/200/200`,
  }));
  return generatedImages;
};

export { generateImages };
