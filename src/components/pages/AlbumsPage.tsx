import { AlbumDeck } from '../AlbumDeck';
import { MainHeader } from '../MainHeader';

const AlbumsPage = (): JSX.Element => {
  return (
    <>
      <MainHeader />
      <AlbumDeck />
    </>
  );
}

export { AlbumsPage };
