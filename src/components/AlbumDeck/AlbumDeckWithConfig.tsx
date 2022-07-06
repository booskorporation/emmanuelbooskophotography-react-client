import { AlbumDeck } from "./AlbumDeck";
import { albumsConfig } from "../../config/albums";

const AlbumDeckWithConfig = (): JSX.Element => {
  const { albums } = albumsConfig;
  return (
    <AlbumDeck albums={ albums } />
  );
};

export { AlbumDeckWithConfig };