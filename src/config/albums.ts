import { IAlbum } from "../types/types"

const albums: IAlbum[] = [
  {
    id: "1", 
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, pariatur.", 
    thumbnail: "https://picsum.photos/400/200"
  },
  {
    id: "2", 
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, pariatur.",
  },
  {
    id: "3", 
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, pariatur.", 
    thumbnail: "https://picsum.photos/400/200"
  },
];

export const albumsConfig = { albums } as const;
