import { StyledAlbumDeck } from './Styled';
import { StyledPageTitle } from '../Styled/StyledPageTitle';
import { AlbumCard } from './AlbumCard';
import { IAlbum } from '../../types/types';

interface IProps {
  albums: IAlbum[];
}

const AlbumDeck = ({ albums }: IProps): JSX.Element => (
  <>
    <StyledPageTitle>Lorem ipsum dolor sit amet.</StyledPageTitle>
    <StyledAlbumDeck>
      { albums.map((album) => <AlbumCard key={album.id} album={album} />) }
    </StyledAlbumDeck>
  </>
);

export { AlbumDeck };
