import { MainHeader } from '../components/MainHeader';
import { AlbumDeckWithConfig as AlbumDeck } from '../components/AlbumDeck';

const AlbumsPage = (): JSX.Element => {
  return (
    <>
      <MainHeader />
      <AlbumDeck />
    </>
  );
}

export { AlbumsPage };
